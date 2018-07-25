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
var MainView = (function (_super) {
    __extends(MainView, _super);
    function MainView($parent) {
        var _this = _super.call(this, $parent) || this;
        _this.skinName = "MainViewSkin";
        // this.setResource(["public", "main"]);
        _this._isPop = false;
        _this.initUi();
        return _this;
    }
    MainView.prototype.initUi = function () {
        this.kBtnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlay, this);
    };
    MainView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
    };
    MainView.prototype.showUI = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.showUI.call(this);
    };
    MainView.prototype.initEvents = function () {
        _super.prototype.initEvents.call(this);
        this.kBtnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlay, this);
    };
    MainView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        this.kBtnPlay.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlay, this);
    };
    MainView.prototype.onClose = function () {
        this.close(1);
    };
    MainView.prototype.onPlay = function () {
        App.NotificationCenter.dispatch(EventConst.EVENT_SHOW_POT);
    };
    return MainView;
}(BaseView));
__reflect(MainView.prototype, "MainView");
//# sourceMappingURL=MainView.js.map