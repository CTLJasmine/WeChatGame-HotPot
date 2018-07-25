class GameScene extends BaseScene {
    public constructor() {
        super();
    }

    public static get gameScene(): GameScene {
        return GameScene.getInstance();
    }

    public onEnter() {
        super.onEnter();

        // this.addLayer(LayerManager.Game_Bg);//视情况添加
        this.addLayer(LayerManager.Game_Main);
        this.addLayer(LayerManager.UI_PopUp);
        this.addLayer(LayerManager.UI_Tips);
        this.addLayer(LayerManager.Effect_Layer);

        ControllerManager.Main.show();
    }
}