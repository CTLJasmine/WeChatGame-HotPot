class UserModel {
    private static _instance: UserModel;
    public static get instance(): UserModel {
        if (!this._instance) this._instance = new UserModel();
        return this._instance;
    }

    public vo: UserVo;
    public constructor() {
        this.vo = new UserVo();
    }

    public get player(): UserVo {
        return this.vo;
    }

    /** 游戏内的红点状态 */
    public get redState() {
        return this.vo.redState;
    }

    public initData(data) {
        this.vo.uid = data.uid;
    }
}