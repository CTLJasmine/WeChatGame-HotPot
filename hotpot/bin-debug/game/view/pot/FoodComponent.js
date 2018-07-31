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
 *  FoodComponent.ts
 *  egret
 *  Created by Liu Yang on 18/07/22.
 */
var FoodComponent = (function (_super) {
    __extends(FoodComponent, _super);
    function FoodComponent() {
        var _this = _super.call(this) || this;
        _this.skinName = "FoodComponentSkin";
        return _this;
    }
    FoodComponent.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    FoodComponent.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    /**
     * 设置组件数据
     */
    FoodComponent.prototype.setData = function (data) {
        this.mData = data;
        this.kImgFood.source = "food_" + this.mData.id + "_png";
    };
    FoodComponent.prototype.clear = function () {
    };
    return FoodComponent;
}(eui.Component));
__reflect(FoodComponent.prototype, "FoodComponent", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=FoodComponent.js.map