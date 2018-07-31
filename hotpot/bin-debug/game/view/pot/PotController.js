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
/**
 *  火锅
 *  PotController.ts
 *  egret
 *
 *  Created by Liu Yang on 18/07/22
 */
var PotController = (function (_super) {
    __extends(PotController, _super);
    function PotController() {
        var _this = _super.call(this) || this;
        _this.mPotView = new potView(LayerManager.Game_Main);
        return _this;
    }
    PotController.prototype.show = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        if (this.mPotView._isShow)
            return;
        _super.prototype.show.call(this);
        this.mPotView.showUI();
    };
    PotController.prototype.close = function () {
        _super.prototype.close.call(this);
    };
    PotController.prototype.addEvents = function () {
        _super.prototype.addEvents.call(this);
    };
    PotController.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
    };
    return PotController;
}(BaseController));
__reflect(PotController.prototype, "PotController");
//# sourceMappingURL=PotController.js.map