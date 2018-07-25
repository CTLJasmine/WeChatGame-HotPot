// TypeScript file
class BaseView extends eui.Component {
    private _parnet: egret.DisplayObjectContainer;
    private _resources: string[];
    private _isInit: boolean;
    public _isShow: boolean;

    public _isPop: boolean = true;
    private showType: number;
    private closeType: number;
    public constructor(parent: egret.DisplayObjectContainer) {
        super();
        this._parnet = parent;
    }

    public showUI(...params: any[]) {
        this.showType = params[0] || 1;
        if (this._parnet.contains(this)) return;
        if (this._isInit) {
            this.addToParent();
            this.initEvents();
        } else {
            this.loadResource(() => {
                this.addToParent();
            }, () => {
                this.initUI();
                this.initEvents();
            });
        }
    }

    private addToParent() {
        this._isShow = true;
        this._parnet.addChild(this);
        if (this._isPop) {
            PopUpUtils.addPopUp(this, true, this.showType);
        }
        this.syncAddSuccess();
    }

    /** 同步处理完成，同步处理后续流程 */
    public syncAddSuccess(): void { }

    public setResource(resource: string[]) {
        this._resources = resource;
    }

    public loadResource(loadComplete: Function, initComplete: Function) {
        if (this._resources && this._resources.length > 0) {
            App.ResourceUtils.loadResource(this._resources, [], loadComplete, null, this);
            this.once(eui.UIEvent.CREATION_COMPLETE, initComplete, this);
        }
        else {
            loadComplete();
            initComplete();
        }
    }

    public initUI() {
        this._isInit = true;
    }

    public initData(data) {

    }

    public initEvents() {

    }

    public removeEvents() {

    }

    /**
     * 关闭面板继承函数
     * @param  {any[]} ...params
     */
    public hide(...params: any[]) {

    }
    /**
     * @param  {any[]} ...params
     */
    public close(...params: any[]) {
        this.closeType = params[1] || 1
        if (params[0] == 1) {
            PopUpUtils.hidePop(this);
            App.cachePanel.push(this);
        } else {
            this._isShow = false;
            if (App.cachePanel.length > 0) {
                let panel = App.cachePanel.pop();
                PopUpUtils.showPop(panel);
            }
            this.removeEvents();
            PopUpUtils.removePopUp(this, null, this.closeType);
        }
    }
}
