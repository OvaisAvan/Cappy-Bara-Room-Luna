# 第八关精简结果

## 当前玩法

启动直进第八关 → 原始 8 波贴纸玩法 → 礼花 → 约 2 秒后全新第八关。暂停、继续、重玩和免费提示保留，不读取旧的关卡/金币/换装存档。

已移除其它 15 关、主菜单、金币钻石、购买道具、奖励广告、换装、收藏、复活、解锁及相关业务资源。共删除 1,425 个业务文件/资源及配套 `.meta`，约 15.29 MiB；另清理空资源目录。

SDK、DragonBones（含 Demo）、DOTween、BuildReport、Packages 等底层内容未删改。它们自带的模板资源和配置结构仍保留。

## 验证结果

- 原始 `Level8.prefab` 哈希不变，25 种贴纸与 75 张动态贴图完整保留。
- 运行时代码、编辑器代码编译通过。编辑器有两条 DragonBones 原有过时 API 警告。
- 保留资源没有指向本次删除资源的 GUID 引用；第三方保护目录哈希检查通过。
- Unity 隔离副本测试通过：启动、免费提示、暂停、继续、重玩；连续两轮共 50 次真实碰撞放置，完整 16 波、两次通关自动重开。
- 测试副本的 308 个业务输入文件与当前项目逐字节一致。

## 尚未覆盖

批处理测试不代表画面与实际鼠标/触屏手势验收，尚未执行 Luna/WebGL 成品构建。SDK 原有 Luna 检测仍提示 `com.unity.modules.ai` 包不符合它的规则，按照本次“不改底层依赖”的范围保留。

## 记录

- 删除计划与结果：`Logs/Level8Audit/prune-plan.json`、`prune-result.json`
- 运行结果：`Logs/Level8Audit/runtime-result.txt`
- Unity 日志：`Logs/Level8Audit/unity-runtime-2.log`
- 静态复验：`C:/Python38/python3.exe Tools/level8_prune.py verify`
- 编译复验：`C:/Python38/python3.exe Tools/level8_compile.py`
- 自动运行测试源码：`Tools/Level8SmokeRunner.cs`，仅注入临时测试副本，不进入游戏 Assets。

删除为实际文件删除，未提交 SVN。可通过 SVN 恢复原有文件。
