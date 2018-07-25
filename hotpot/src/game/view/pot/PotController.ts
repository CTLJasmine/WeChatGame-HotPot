/** 
 *  火锅
 *  PotController.ts
 *  egret
 *
 *  Created by Liu Yang on 18/07/22
 */
class PotController extends BaseController {
    private mPotView: potView;

    public constructor() {
        super();
        this.mPotView = new potView(LayerManager.Game_Main);
    }

    public show(...param: any[]) {
        if (this.mPotView._isShow) return;
        super.show();
        this.mPotView.showUI();
    }

    public close() {
        super.close();
    }

    public addEvents() {
        super.addEvents();
    }

    public removeEvents() {
        super.removeEvents();
    }
}
