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
// TypeScript file
var BaseView = (function (_super) {
    __extends(BaseView, _super);
    function BaseView(parent) {
        var _this = _super.call(this) || this;
        _this._isPop = true;
        _this._parnet = parent;
        return _this;
    }
    BaseView.prototype.showUI = function () {
        var _this = this;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.showType = params[0] || 1;
        if (this._parnet.contains(this))
            return;
        if (this._isInit) {
            this.addToParent();
            this.initEvents();
        }
        else {
            this.loadResource(function () {
                _this.addToParent();
            }, function () {
                _this.initUI();
                _this.initEvents();
            });
        }
    };
    BaseView.prototype.addToParent = function () {
        this._isShow = true;
        this._parnet.addChild(this);
        if (this._isPop) {
            PopUpUtils.addPopUp(this, true, this.showType);
        }
        this.syncAddSuccess();
    };
    /** 同步处理完成，同步处理后续流程 */
    BaseView.prototype.syncAddSuccess = function () { };
    BaseView.prototype.setResource = function (resource) {
        this._resources = resource;
    };
    BaseView.prototype.loadResource = function (loadComplete, initComplete) {
        if (this._resources && this._resources.length > 0) {
            App.ResourceUtils.loadResource(this._resources, [], loadComplete, null, this);
            this.once(eui.UIEvent.CREATION_COMPLETE, initComplete, this);
        }
        else {
            loadComplete();
            initComplete();
        }
    };
    BaseView.prototype.initUI = function () {
        this._isInit = true;
    };
    BaseView.prototype.initData = function (data) {
    };
    BaseView.prototype.initEvents = function () {
    };
    BaseView.prototype.removeEvents = function () {
    };
    /**
     * 关闭面板继承函数
     * @param  {any[]} ...params
     */
    BaseView.prototype.hide = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
    };
    /**
     * @param  {any[]} ...params
     */
    BaseView.prototype.close = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.closeType = params[1] || 1;
        if (params[0] == 1) {
            PopUpUtils.hidePop(this);
            App.cachePanel.push(this);
        }
        else {
            this._isShow = false;
            if (App.cachePanel.length > 0) {
                var panel = App.cachePanel.pop();
                PopUpUtils.showPop(panel);
            }
            this.removeEvents();
            PopUpUtils.removePopUp(this, null, this.closeType);
        }
    };
    return BaseView;
}(eui.Component));
__reflect(BaseView.prototype, "BaseView");
//# sourceMappingURL=BaseView.js.map