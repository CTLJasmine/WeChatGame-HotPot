// TypeScript file
class BaseController extends BaseClass {

    public constructor() {
        super();
    }

    public addEvents() { }
    public removeEvents() { }

    public show(...param: any[]) {
        this.addEvents();
    }
    public close() {
        this.removeEvents();
    }
}