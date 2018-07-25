class DecorateVo {
    /** 角色、装扮id */
    private _id: number = 0;
    /** 类型 1:角色 2:衣服 3:鞋子 4:帽子 5:眼镜 6:尾翼 */
    private _type: number = 0;
    /** 名称 */
    private _name: string = "";
    /** 品质 1:普通 2:稀有 3:史诗 4:传奇 */
    private _quality: number = 0
    /** 移动速度加成 */
    private _speed: number = 0;
    /** 跳跃高度加成 */
    private _jump: number = 0;
    /** 射门力度加成 */
    private _shoot: number = 0;
    /** 碰撞尺寸加成 */
    private _size: number = 0;
    /** 装扮获取类型 1:抽卡 2:购买 3:分享*/
    private _accessType: number = 0;
    /** 获取条件 与accessType类型对应依次为 1:抽卡数量 2:购买人民币价格(分) 3:目标分享次数 */
    private _amount: number = 0;

    public get id(): number { return this._id; }
    public set id(n: number) { this._id = n; }

    public get type(): number { return this._type; }
    public set type(n: number) { this._type = n; }

    public get name(): string { return this._name; }
    public set name(s: string) { this._name = s; }

    public get quality(): number { return this._quality; }
    public set quality(n: number) { this._quality = n; }

    public get speed(): number { return this._speed; }
    public set speed(n: number) { this._speed = n; }

    public get jump(): number { return this._jump; }
    public set jump(n: number) { this._jump = n; }

    public get shoot(): number { return this._shoot; }
    public set shoot(n: number) { this._shoot = n; }

    public get size(): number { return this._size; }
    public set size(n: number) { this._size = n; }

    public get accessType(): number { return this._accessType; }
    public set accessType(n: number) { this._accessType = n; }

    public get amount(): number { return this._amount; }
    public set amount(n: number) { this._amount = n; }

    public constructor(info?: any) {
        if (info) {
            this.id = parseInt(info.id);
            this.type = parseInt(info.type);
            this.name = info.name;
            this.quality = parseInt(info.quality);
            this.speed = parseInt(info.speed);
            this.jump = parseInt(info.jump);
            this.shoot = parseInt(info.jump);
            this.size = parseInt(info.size);
            this.accessType = parseInt(info.accessType);
            this.amount = parseInt(info.amount);
        }
    }

    public setData(data): void {
        this.id = data.id;
        this.type = data.type;
        this.name = data.name;
        this.quality = data.quality;
        this.speed = data.speed;
        this.jump = data.jump;
        this.shoot = data.shoot;
        this.size = data.size;
        this.accessType = data.accessType;
        this.amount = data.amount;
    }

    public clear(): void {
        this.id = 0;
        this.type = 0;
        this.name = "0";
        this.quality = 0;
        this.speed = 0;
        this.jump = 0;
        this.shoot = 0;
        this.size = 0;
        this.accessType = 0;
        this.amount = 0;
    }

    public getConfigData() {
        let result = {
            id: this.id,
            type: this.type,
            name: this.name,
            quality: this.quality,
            speed: this.speed,
            jump: this.jump,
            shoot: this.shoot,
            size: this.size,
            accessType: this.accessType,
            amount: this.amount
        }
        return result;
    }
}