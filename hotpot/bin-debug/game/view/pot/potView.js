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
 *  火锅主界面
 *  potView.ts
 *  egret
 *
 *  Created by Liu Yang on 18/07/22.
 */
var potView = (function (_super) {
    __extends(potView, _super);
    function potView(parent) {
        var _this = _super.call(this, parent) || this;
        _this.mFoodsList = []; // 食材列表
        _this.mEnterFrame = false; // 开启状态，开启状态需要初始化到最大数量的食材
        _this.skinName = "PotViewSkin";
        return _this;
    }
    /** call by man */
    potView.prototype.showUI = function () {
        _super.prototype.showUI.call(this);
        this.initUi();
    };
    potView.prototype.initUi = function () {
        // produce foods
        this.addFood();
        // start circle
        this.startTurn();
        // start Anim
        this.startNpcAnim();
    };
    /**
     * 开始播放npc的动画
     */
    potView.prototype.startNpcAnim = function () {
        if (!this.mTestMovieClip)
            this.mTestMovieClip = MovieClipComponent.produce("npc_1_drop", "npc_1_drop");
        this.addChild(this.mTestMovieClip);
        this.mTestMovieClip.x = 300;
        this.mTestMovieClip.y = 300;
        this.mTestMovieClip.play(-1);
    };
    /**
     * 旋转
     */
    potView.prototype.startTurn = function () {
        this.mLeft = this;
        for (var i = 0; i < this.mFoodsList.length; i++) {
            egret.Tween.get(this.mFoodsList[i], { loop: true, onChange: this.updatePos, onChangeObj: this })
                .to({ alpha: 1 }, 100 / UserModel.instance.player.configData.turnSpeed * 1000);
        }
    };
    /**
     * 更新坐标
     */
    potView.prototype.updatePos = function () {
    };
    /**
     * 生产
     */
    potView.prototype.addFood = function () {
        var FM = FoodModel.instance;
        if (!this.mEnterFrame) {
            this.mEnterFrame = true;
            for (var i = 0; i < UserModel.instance.player.configData.foodLimit; i++) {
                var f = new FoodComponent();
                var randomId = App.RandomUtils.limitInteger(1, FM.foodsData.length);
                f.setData(FM.getDataById(randomId));
                this.kGrpFood.addChild(f);
                f.x = App.RandomUtils.limitInteger(10, this.kGrpFood.width - 10);
                f.y = App.RandomUtils.limitInteger(10, this.kGrpFood.height - 10);
                f.anchorOffsetX = f.width / 2;
                f.anchorOffsetY = f.height / 2;
                this.mFoodsList.push(f);
            }
        }
    };
    /** async call after showUI by sys */
    potView.prototype.initEvents = function () {
        _super.prototype.initEvents.call(this);
        this.kBtnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseHandler, this);
    };
    potView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        this.kBtnReturn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseHandler, this);
    };
    potView.prototype.clear = function () {
    };
    potView.prototype.onCloseHandler = function () {
        this.clear();
        this.close(0, 5);
    };
    return potView;
}(BaseView));
__reflect(potView.prototype, "potView");
//# sourceMappingURL=potView.js.map