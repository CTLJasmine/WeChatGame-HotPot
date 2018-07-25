// 角色类型
enum ROLE_TYPE {
    NORMAL = 1, // 常规宠物
    SPECIAL = 2,// 小白人
}

// NPC角色数据结构
type role_type = {
    id: number,      // 角色id
    type: number,    // 角色类型
    name: string,    // 角色名称
    desc: string,    // 角色描述
    foods: number[] // 角色喜爱的食物
}

// 角色数据模型
class RoleModel {

    private static _instance: RoleModel;
    public static get instance(): RoleModel {
        if (!this._instance) this._instance = new RoleModel();
        return this._instance;
    }

    private _npcList: role_type[] = [];  // 角色数据
    private _mIsInit: boolean = false;   // 是否已经完成角色信息的解析

    private get npcData(): role_type[] { return this._npcList; }

    public constructor() { }

    public async initModel() {
        let configData = RES.getRes("npc_json");
        this.decode(configData);
    }

    private decode(data: any) {
        for (let key of data) {
            this._npcList.push(key);
        }
        this._mIsInit = true;
    }

    public get isInit(): boolean {
        return this._mIsInit;
    }
}
