/** 
 *  火锅主界面
 *  potView.ts
 *  egret
 *
 *  Created by Liu Yang on 18/07/22.
 */
class potView extends BaseView {
    public kGrpMain: eui.Group;
    public kLabelScore: eui.Label;
    public kGrpFood: eui.Group;
    public kBtnReturn: eui.Image;

    private mFoodsList: FoodComponent[] = [];   // 食材列表
    private mEnterFrame: boolean = false;       // 开启状态，开启状态需要初始化到最大数量的食材
    private mLeft: potView;

    private mTestMovieClip: MovieClipComponent;
    public constructor(parent: egret.DisplayObjectContainer) {
        super(parent);
        this.skinName = "PotViewSkin";
        
    }

    /** call by man */
    public showUI() {
        super.showUI();
        this.initUi();
    }

    private initUi() {
        // produce foods
        this.addFood();
        // start circle
        this.startTurn();
        // start Anim
        this.startNpcAnim();
    }

    /**
     * 开始播放npc的动画
     */
    private startNpcAnim():void {
        if (!this.mTestMovieClip) this.mTestMovieClip = MovieClipComponent.produce("npcMove_1", "npcMove_1");
        this.addChild(this.mTestMovieClip);
        this.mTestMovieClip.x = 300;
        this.mTestMovieClip.y = 300;
        this.mTestMovieClip.play(-1);
    }

    /**
     * 旋转
     */
    private startTurn(): void {
        this.mLeft = this;
        for (let i = 0; i < this.mFoodsList.length; i++) {
            egret.Tween.get(this.mFoodsList[i], { loop: true, onChange: this.updatePos, onChangeObj: this })
                .to({ alpha: 1 }, 100 / UserModel.instance.player.configData.turnSpeed * 1000)
        }
    }

    /** 
     * 更新坐标
     */
    private updatePos(): void {

    }

    /** 
     * 生产
     */
    private addFood(): void {
        let FM = FoodModel.instance;
        if (!this.mEnterFrame) {
            this.mEnterFrame = true;
            for (let i = 0; i < UserModel.instance.player.configData.foodLimit; i++) {
                let f = new FoodComponent();
                let randomId = App.RandomUtils.limitInteger(1, FM.foodsData.length);
                f.setData(FM.getDataById(randomId));
                this.kGrpFood.addChild(f);
                f.x = App.RandomUtils.limitInteger(10, this.kGrpFood.width - 10);
                f.y = App.RandomUtils.limitInteger(10, this.kGrpFood.height - 10);
                f.anchorOffsetX = f.width / 2;
                f.anchorOffsetY = f.height / 2;
                this.mFoodsList.push(f);
            }
        }
    }

    /** async call after showUI by sys */
    public initEvents() {
        super.initEvents();
        this.kBtnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseHandler, this);
    }

    public removeEvents() {
        super.removeEvents();
        this.kBtnReturn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseHandler, this);
    }

    private clear() {

    }

    private onCloseHandler() {
        this.clear();
        this.close(0, 5);
    }
}