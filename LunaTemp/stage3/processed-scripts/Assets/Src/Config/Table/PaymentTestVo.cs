using UnityEngine;
using SCParam;
using System.Collections.Generic;
[System.Serializable]
public partial class PaymentTestVo : SCParam.SCDataBase {
    
    /// <summary>
    /// 表id
    /// </summary>
    public int ID;

    /// <summary>
    /// 显示顺序
    /// </summary>
    public int ViewOrder;

    /// <summary>
    /// 说明
    /// </summary>
    public string Name;

    /// <summary>
    /// 充值类型（策划无需配置，这是运营后台配置的礼包key值）
    /// </summary>
    public string PayType;

    /// <summary>
    /// 是否非消耗品
    /// </summary>
    public int IsNotConsumables;

    /// <summary>
    /// 人民币
    /// </summary>
    public float Money;

    /// <summary>
    /// 默认货币文本
    /// </summary>
    public string MoneyText;

    /// <summary>
    /// 换取货币（购买后获得货币的基数）
    /// </summary>
    public int Gold;

    /// <summary>
    /// 奖励比例（购买后额外获得钻石的数量=奖励比例/100*基数）
    /// </summary>
    public int Ratio;

    /// <summary>
    /// 描述
    /// </summary>
    public string Text;

    /// <summary>
    /// 图标
    /// </summary>
    public string Image;

    /// <summary>
    /// 游戏类型
    /// </summary>
    public string GameType;

    /// <summary>
    /// 描述控件
    /// </summary>
    public string DscControlName;

    /// <summary>
    /// 购买类型(必须同步,防止本地缓存问题)（去广告:CloseAd购买钻石:BuyDiamond购买礼包:BuyPreferentialGift订阅:AutoSubscribe）
    /// </summary>
    public string BuyType;

    /// <summary>
    /// 订阅分组
    /// </summary>
    public int Group;

}
