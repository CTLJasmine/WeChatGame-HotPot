var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MainController = (function (_super) {
    __extends(MainController, _super);
    function MainController() {
        var _this = _super.call(this) || this;
        _this._main = new MainView(LayerManager.Game_Main);
        return _this;
    }
    /**
     * 显示主页面
     * @param  {any[]} ...param
     */
    MainController.prototype.show = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        if (this._main._isShow)
            return;
        _super.prototype.show.call(this);
        (_a = this._main).showUI.apply(_a, param);
        var _a;
    };
    MainController.prototype.close = function () {
        _super.prototype.close.call(this);
        this._main.close();
    };
    MainController.prototype.addEvents = function () {
        App.NotificationCenter.addEventListenr(EventConst.EVENT_SHOW_POT, this.onShowPotView, this);
    };
    MainController.prototype.removeEvents = function () {
        App.NotificationCenter.removeEventListener(EventConst.EVENT_SHOW_POT, this.onShowPotView, this);
    };
    MainController.prototype.onShowPotView = function () {
        ControllerManager.pot.show();
    };
    return MainController;
}(BaseController));
__reflect(MainController.prototype, "MainController");
//# sourceMappingURL=MainController.js.map