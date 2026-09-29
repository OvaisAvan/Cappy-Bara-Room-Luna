// Upgrade NOTE: replaced '_Object2World' with 'unity_ObjectToWorld'

// Upgrade NOTE: replaced 'mul(UNITY_MATRIX_MVP,*)' with 'UnityObjectToClipPos(*)'

Shader "SCShaders/SC3DTextOutline"
{
    Properties {
        [HideInInspector] _MainTex ("Font Texture", 2D) = "white" {}
        // _ShadowColor ("Shadow Color", Color) = (1,1,1,1)
        _OutlineColor ("Outline Color", Color) = (0,0,0,1)
        // _OutlineAlphaMul ("OutlineAlphaMul", Range(0, 15)) = 2
        _OutlineWidth ("Outline Width", Range(0,1.5)) = 0
        _VertOffset("Vert Offset", Vector) = (0,0,0,0)
    }

    SubShader {

        CGINCLUDE
        #include "UnityCG.cginc"
        
        ENDCG

        Tags {
            "Queue"="Transparent"
            "IgnoreProjector"="True"
            "RenderType"="Transparent"
            
        }
        Lighting Off Cull Off ZTest Always ZWrite Off
        Blend SrcAlpha OneMinusSrcAlpha

        Pass {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            sampler2D _MainTex;
            // fixed4 _ShadowColor;
            float4 _MainTex_ST;
            float4 _MainTex_TexelSize;
            // float _OutlineAlphaMul;
            fixed4 _OutlineColor;
            float _OutlineWidth;
            fixed4 _TextureSampleAdd;

            float2 _VertOffset;

            struct appdata_t {
                float4 vertex : POSITION;
                fixed4 color : COLOR;
                float2 texcoord : TEXCOORD0;
            };
            struct v2f {
                float4 vertex : SV_POSITION;
                fixed4 color : COLOR;
                float2 texcoord : TEXCOORD0;
            };

            v2f vert (appdata_t v)
            {
                v2f o;
                float4 offsetVert = v.vertex;
                offsetVert.x += _VertOffset.x;
                offsetVert.y += _VertOffset.y;
                o.vertex = UnityObjectToClipPos(offsetVert);
                // o.color = _Color;
                // o.color = v.color * _ShadowColor;
                o.color = v.color;
                o.texcoord = TRANSFORM_TEX(v.texcoord,_MainTex);
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                fixed2 up = i.texcoord + _MainTex_TexelSize.xy * float2(0, 1) * _OutlineWidth;
                fixed2 down = i.texcoord + _MainTex_TexelSize.xy * float2(0, -1) * _OutlineWidth;
                fixed2 left = i.texcoord + _MainTex_TexelSize.xy * float2(-1, 0) * _OutlineWidth;
                fixed2 right = i.texcoord + _MainTex_TexelSize.xy * float2(1, 0) * _OutlineWidth;
                fixed2 ul = i.texcoord + _MainTex_TexelSize.xy * float2(-1, 1) * _OutlineWidth;
                fixed2 ur = i.texcoord + _MainTex_TexelSize.xy * float2(1, 1) * _OutlineWidth;
                fixed2 dl = i.texcoord + _MainTex_TexelSize.xy * float2(-1, -1) * _OutlineWidth;
                fixed2 dr = i.texcoord + _MainTex_TexelSize.xy * float2(1, -1) * _OutlineWidth;

                fixed4 upColor = tex2D(_MainTex, up);
                fixed4 downColor = tex2D(_MainTex, down);
                fixed4 leftColor = tex2D(_MainTex, left);
                fixed4 rightColor = tex2D(_MainTex, right);
                fixed4 ulColor = tex2D(_MainTex, ul);
                fixed4 urColor = tex2D(_MainTex, ur);
                fixed4 dlColor = tex2D(_MainTex, dl);
                fixed4 drColor = tex2D(_MainTex, dr);
                // fixed4 texColor = (tex2D(_MainTex, i.texcoord) + _TextureSampleAdd) * i.color;
              
                // float alphaSum = upColor.a + downColor.a + leftColor.a + rightColor.a + ulColor.a + urColor.a + dlColor.a + drColor.a + texColor.a;
                // float alphaAva = alphaSum / 9;
                float alphaSum = upColor.a + downColor.a + leftColor.a + rightColor.a + ulColor.a + urColor.a + dlColor.a + drColor.a;
                float alphaAva = alphaSum / 8;
                float isEdge = _OutlineWidth > 0 && alphaSum > 0;

                    
                // fixed4 edgeColor = texColor * alphaAva + _OutlineColor * (1 - alphaAva);
                fixed4 edgeColor = _OutlineColor;
                // edgeColor.a = alphaAva * _OutlineAlphaMul;
                edgeColor.a = saturate(alphaAva * _OutlineWidth * 15);

                // fixed4 color = edgeColor * isEdge + texColor * (1 - isEdge);
                fixed4 color = edgeColor;
                #if !defined(UNITY_COLORSPACE_GAMMA)
                color.rgb = LinearToGammaSpace(color.rgb);
                #endif
                return color;
            }
            ENDCG
        }
    }
 
}