var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UserModel = (function () {
    function UserModel() {
        this.vo = new UserVo();
    }
    Object.defineProperty(UserModel, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new UserModel();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "player", {
        get: function () {
            return this.vo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "redState", {
        /** 游戏内的红点状态 */
        get: function () {
            return this.vo.redState;
        },
        enumerable: true,
        configurable: true
    });
    UserModel.prototype.initData = function (data) {
        this.vo.uid = data.uid;
    };
    return UserModel;
}());
__reflect(UserModel.prototype, "UserModel");
//# sourceMappingURL=UserModel.js.map