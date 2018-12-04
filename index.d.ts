declare module "@fitzix/bi-node" {
    // enums
    type SocketType = "udp4" | "udp6";

    interface biModel {
        toString(): string;
    }

    interface options {
        gameId: number;
        ip: string;
        port: number;
        region: number;
    }

    interface devices {
        // 设备唯一id
        deviceId: string;
        ip?: string;
        // 客户端版本号
        clientVersion?: string;
        // 终端操作系统版本
        systemSoftware?: string;
        // 移动终端机型
        systemHardware?: string;
        // 运营商 1->中国移动 2->中国联通 3->中国电信 4->WIFI
        comOperation?: 1 | 2 | 3 | 4;
        // 网络类型 1->WIFI 2->4G 3->3G 4->2G
        network?: 1 | 2 | 3 | 4;
        // cpu类型-频率-核数
        cpuHardware?: string;
        // gpu类型-频率-核数
        gpuHardware?: string;
        // 内存
        memory?: number;
        // 显示屏宽度
        screenWidth?: number;
        // 显示屏高度
        screenHeight?: number;
        // 像素密度
        density?: number;
        // openGL render信息
        glRender?: string;
        // openGL 版本信息
        glVersion?: string;
        // 手机号
        phoneNumber?: string;
    }

    interface logRole {
        uuid?: string;
        uid: string;
        regionId?: number;
        channelId?: number;
        regDt?: Date;
        level?: number;
        // 是否在其他区服注册过
        reged?: 0 | 1;
        vip?: number;
        //  是否付过费
        payed?: 0 | 1;
    }

    interface logReason extends logRole {
        // 关联一次事件的唯一ID 
        sequenceId?: string;
        // 货币变动一级原因
        reason?: string;
        // 货币变动二级原因 没有填0
        subReason?: string;
    }

    function init(option: options): void;
    function send(bimodel: biModel): void;

    // models

    // logAction
    interface logActionParams {
        uuid: string;
        uid: string;
        regionId?: number;
        channelId?: number;
        level?: number;
        // 是否在其他区服注册过
        reged?: 0 | 1;


        // 日志类型 1->进区服前行为 2->进区服后行为
        type: 1 | 2;
        // 行为类型 游戏侧自定义
        actionType: number;
        // 行为编号 游戏侧自定义
        actionNumber: number;
        g1?: number;
        g2?: number;
        g3?: number;
        g4?: number;
        g5?: number;
        g6?: number;
        s1?: string;
        s2?: string;
        s3?: string;
        s4?: string;
        s5?: string;
        s6?: string;
    }

    class logAction implements biModel {
        constructor(params: logActionParams, devices: devices);
        toString(): string;
    }

    // logAdVideo
    interface logAdVideoParams extends logRole {
        // 视频触发点 游戏自定义
        type: number;
        // 具体动作
        // 0->主动触发打开视频窗口 1->看到视频窗口后主动关闭 2->点击视频播放视频 3->视频中途关闭 4->观看结束 5->获得奖励 6->没有可观看的广告
        subType: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    }

    class logAdVideo {
        constructor(params: logAdVideoParams);
        toString(): string;
    }

    // logAppOnce
    interface logAppOnceParams {
        uuid: string;
        uid?: string;
        regionId?: number;
        channelId?: number;
        level?: number;
        // 是否在其他区服注册过
        reged?: 0 | 1;
        // 行为编号 游戏侧自定义
        actionNumber: number;
    }

    class logAppOnce {
        constructor(params: logAppOnceParams, devices: devices);
        toString(): string;
    }

    // logBattle
    interface logBattleParams extends logReason {
        // 日志类型 1->开始 2->成功结束 3->失败结束
        logType: 1 | 2 | 3;
        // 关卡类型 自定义
        battleType: number;
        // 关卡ID
        battleId: number;
        // 本次闯关时间 单位秒 结束时有
        time: number;
    }

    class logBattle {
        constructor(params: logBattleParams);
        toString(): string;
    }

    // logCdKey
    interface logCdKeyParams extends logRole {
        actionId: string;
        cdkey: string;
        prize: string;
        failReason: string;
    }

    class logCdKey {
        constructor(params: logCdKeyParams);
        toString(): string;
    }

    // logCu
    interface logCuParams {
        regionId?: number;
        channelId?: number;
        payNum: number;
        payNotNumber: number;
    }

    class logCu {
        constructor(params: logCuParams);
        toString(): string;
    }

    // logEnergy
    interface logEnergyParams extends logReason {
        oldEnergy: number;
        newEnergy: number;
    }

    class logEnergy {
        constructor(params: logEnergyParams);
        toString(): string;
    }

    // logEquip
    interface logEquipParams extends logRole {
        sequenceId: string;
        reason: string;
        subReason: string;
        //  增加或减少 0->减少 1->增加 2->不变
        addOrReduce: 0 | 1 | 2;
        // 装备类型
        equipType: number;
        // 装备ID
        equipId: number;
        // 装备数量
        num: number;
    }

    class logEquip {
        constructor(params: logEquipParams);
        toString(): string;
    }

    // logEquipDegree
    interface logEquipDegreeParams extends logReason {
        // 装备类型
        equipType: number;
        // 装备ID
        equipId: number;
        // 装备原来的阶数
        equipOldDegree: number;
        // 装备新的阶数
        equipNewDegree: number;
    }

    class logEquipDegree {
        constructor(params: logEquipDegreeParams);
        toString(): string;
    }

    // logEquipLevel
    interface logEquipLevelParams extends logReason {
        // 装备类型
        equipType: number;
        // 装备ID
        equipId: number;
        // 装备原来的阶数
        equipOldLevel: number;
        // 装备新的阶数
        equipNewLevel: number;
    }

    class logEquipLevel {
        constructor(params: logEquipLevelParams);
        toString(): string;
    }

    // logEquipPlayWay
    interface logEquipPlayWayParams extends logReason {
        // 装备类型
        equipType: number;
        // 装备ID
        equipId: number;
        // 装备原来的阶数
        equipOldLevel: number;
        // 装备新的阶数
        equipNewLevel: number;
        // 装备玩法类型
        playType: number;
    }

    class logEquipPlayWay {
        constructor(params: logEquipPlayWayParams);
        toString(): string;
    }

    // logFriends
    interface logFriendsParams extends logRole {
        // 玩家原来的好友数量
        oldFriendsNum: number;
        // 玩家新的好友数量
        newFriendsNum: number;
        // 好友类型
        type: number;
    }

    class logFriends {
        constructor(params: logFriendsParams);
        toString(): string;
    }

    // logGamePattern
    interface logGamePatternParams extends logReason {
        // 日志类型 1->战斗开始 2->战斗成功结束 3->战斗失败结束
        logType: 1 | 2 | 3;
        // 模式类型
        patternType: number;
        // 模式ID
        patternId: number;
        // 模式子ID 没有填0
        patternSubId: number;
        // 本次闯关时间 单位秒 结束时有
        time: number;
    }

    class logGamePattern {
        constructor(params: logGamePatternParams);
        toString(): string;
    }

    // LogGuild
    interface logGuildParams extends logReason {
        // 日志类型 1->公会创建 2->公会解散
        logType: 1 | 2;
        // 公会ID
        guildId: number;
    }

    class LogGuild {
        constructor(params: logGuildParams);
        toString(): string;
    }

    // LogGuildDonate
    interface logGuildDonateParams extends logReason {
        // 公会ID
        guildId: number;
    }

    class logGuildDonate {
        constructor(params: logGuildDonateParams);
        toString(): string;
    }

    // LogGuildLevel
    interface logGuildLevelParams {
        channelId?: number;
        regionId?: number;
        // 关联一次事件的唯一ID 
        sequenceId?: string;
        // 货币变动一级原因
        reason?: string;
        // 货币变动二级原因 没有填0
        subReason?: string;
        // 公会ID
        guildId: number;
        // 公会原来的等级
        guildOldLevel: number;
        // 公会新的等级
        guildNewLevel: number;
        // 本次变动的等级
        guildLevel: number;
    }

    class logGuildLevel {
        constructor(params: logGuildLevelParams);
        toString(): string;
    }

    // LogGuildU
    interface logGuildUParams extends logReason {
        // 1->加入公会 2->退出公会
        logType: 1 | 2;
        // 公会ID
        guildId: number;
    }

    class logGuildU {
        constructor(params: logGuildUParams);
        toString(): string;
    }

    // LogItem
    interface logItemParams extends logReason {
        // 道具类型
        itemType: number;
        // 道具ID
        itemId: number;
        // 道具新的数量
        oldNum: number;
        // 本次变动的道具数量
        newNum: number;
    }

    class logItem {
        constructor(params: logItemParams);
        toString(): string;
    }

    // LogLevel
    interface logLevelarams extends logReason {
        // 玩家之前等级
        level: number;
        // 人物ID
        heroId?: string;
        // 玩家新等级
        newLevel: number;
    }

    // LogLogin
    interface logLoginParams extends logRole {
        // 登录类型 0->登出 1->登入
        loginType: 0 | 1;
        // 玩家好友数量
        friendsNum?: number;
        // 本次登录在线时间 退出时有,秒为单位
        online?: number;
        // 玩家战力
        power?: number;
        // 体力
        energy?: number;
        // 公会ID 没有公会填0
        guildId?: number;
        // 角色昵称 注意昵称中不能有|
        roleName?: string;
    }

    class logLogin {
        constructor(params: logLoginParams, devices: devices)
    }

    // LogLoginU

    class logLoginU {
        constructor(params: logRole, devices: devices)
    }

    // LogMoney
    interface logMoneyarams extends logReason {
        // 原来的钱数
        oldMoney: number;
        // 新的钱数
        newMoney: number;
        // 道具个数 本次购买道具、装备的个数 买货币时为0
        num: number;
        // 钱的类型
        // 注意：钻石货币类型必须为1，其他货币类型可自定义
        moneyType: number;
        // 商品ID对应名称
        // 礼包名称及礼包中具体包含的各种物品名称都需要
        itemIdName?: string;
        // 商店编号 区分不同的商店
        itemType?: number;
        // 商品项ID 商店内唯一ID
        itemId?: number;
        // 是否属于商城购买 0否 1是
        shop?: number;
    }

    class logMoney {
        constructor(params: logMoneyarams);
        toString(): string;
    }

    // LogNewTask
    interface logNewTaskarams extends logReason {
        // 步骤ID
        taskId: number;
        // 跟步骤ID对应的引导顺序
        orderId: number;
    }

    class logNewTask {
        constructor(params: logEquipPlayWayParams);
        toString(): string;
    }

    // logPay
    interface logPayarams extends logRole {
        // 充值类型 1->代币 2->月卡
        payType: 1 | 2;
        // 订单号
        orderNumber: string;
        // 充值代币金额
        // 建议实际充值单位*100,以避免打折等引起小数问题，默认为人民币分
        dPrice: number;
        // 充值后存量
        // 充值后玩家拥有的代币（钻石）数
        dStoreNum: number;
        // 截止该笔累计充值金额
        // 跟设置的充值金额单位对应，默认为人民币分
        totalNum: number;
        // 首充标志位 只有当一个区服内的玩家第一次充值时发1，其他都发0
        // 0普通充值 1首次充值
        fPayFlag: 0 | 1;
        // 充值渠道id 当登录渠道与充值渠道不同时需要发送，相同时发0
        payChannelId?: number;
        // 内购项ID
        // 游戏用的统一计费点编号，代表一个计费点，一般充值回调会透传这个参数
        payId?: number;
        // 内购项ID对应名称
        // 礼包名称及礼包中具体包含的各种物品名称都需要，中文，运营要能看懂
        payIdName?: string;
        // 本次充值代币(钻石)数量
        dNum: number;
        // 充值前代币(钻石)存量
        // 充值前玩家拥有的代币（钻石）数
        dBeforeStoreNum: number;
    }

    class logPay {
        constructor(params: logPayarams);
        toString(): string;
    }

    // logPower
    interface logPowerarams extends logReason {
        // 玩家原来的战力
        oldPower: number;
        // 玩家新的战力
        newPower: number;
    }

    class logPower {
        constructor(params: logPowerarams);
        toString(): string;
    }

    // LogReg
    class logReg {
        constructor(params: logRole, devices: devices)
    }

    // LogRegU
    interface logRegUParams {
        uuid: string;
        channelId?: number;
    }

    class logRegU {
        constructor(params: logRegUParams, devices: devices);
        toString(): string;
    }


    // LogShareIn
    interface logShareInParams extends logRole {
        // 分享点
        type: number;
        // 是否是新玩家 0否 1是
        newPlayer: 0 | 1;
    }

    class LogShareIn {
        constructor(params: logShareInParams)
    }

    // LogShareOut
    interface logShareOutParams extends logRole {
        // 分享点
        type: number;
    }

    class LogShareOut {
        constructor(params: logShareOutParams)
    }

    // LogTask
    interface logTaskParams extends logRole {
        // 任务类型
        taskType: number;
        // 任务ID
        taskId: number;
    }

    class LogTask {
        constructor(params: logTaskParams)
    }

}