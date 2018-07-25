class ControllerManager extends BaseClass {
    public constructor() {
        super();
    }

    public static get Main(): MainController {
        return MainController.getInstance();
    }

    public static get pot(): PotController {
        return PotController.getInstance();
    }
}

