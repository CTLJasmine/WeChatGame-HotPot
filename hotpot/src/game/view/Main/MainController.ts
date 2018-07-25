class MainController extends BaseController {
    public _main: MainView;

    public constructor() {
        super();
        this._main = new MainView(LayerManager.Game_Main);
    }

    /**
     * 显示主页面
     * @param  {any[]} ...param
     */
    public show(...param: any[]) {
        if (this._main._isShow) return;
        super.show();
        this._main.showUI(...param);
    }

    public close() {
        super.close();
        this._main.close();
    }
    
    public addEvents() {
        App.NotificationCenter.addEventListenr(EventConst.EVENT_SHOW_POT, this.onShowPotView, this);
    }

    public removeEvents() {
        App.NotificationCenter.removeEventListener(EventConst.EVENT_SHOW_POT, this.onShowPotView, this);
    }

    private onShowPotView():void {
        ControllerManager.pot.show();
    }
}