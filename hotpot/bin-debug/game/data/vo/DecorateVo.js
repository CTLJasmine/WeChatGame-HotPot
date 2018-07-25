var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DecorateVo = (function () {
    function DecorateVo(info) {
        /** 角色、装扮id */
        this._id = 0;
        /** 类型 1:角色 2:衣服 3:鞋子 4:帽子 5:眼镜 6:尾翼 */
        this._type = 0;
        /** 名称 */
        this._name = "";
        /** 品质 1:普通 2:稀有 3:史诗 4:传奇 */
        this._quality = 0;
        /** 移动速度加成 */
        this._speed = 0;
        /** 跳跃高度加成 */
        this._jump = 0;
        /** 射门力度加成 */
        this._shoot = 0;
        /** 碰撞尺寸加成 */
        this._size = 0;
        /** 装扮获取类型 1:抽卡 2:购买 3:分享*/
        this._accessType = 0;
        /** 获取条件 与accessType类型对应依次为 1:抽卡数量 2:购买人民币价格(分) 3:目标分享次数 */
        this._amount = 0;
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
    Object.defineProperty(DecorateVo.prototype, "id", {
        get: function () { return this._id; },
        set: function (n) { this._id = n; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecorateVo.prototype, "type", {
        get: function () { return this._type; },
        set: function (n) { this._type = n; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecorateVo.prototype, "name", {
        get: function () { return this._name; },
        set: function (s) { this._name = s; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecorateVo.prototype, "quality", {
        get: function () { return this._quality; },
        set: function (n) { this._quality = n; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecorateVo.prototype, "speed", {
        get: function () { return this._speed; },
        set: function (n) { this._speed = n; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecorateVo.prototype, "jump", {
        get: function () { return this._jump; },
        set: function (n) { this._jump = n; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecorateVo.prototype, "shoot", {
        get: function () { return this._shoot; },
        set: function (n) { this._shoot = n; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecorateVo.prototype, "size", {
        get: function () { return this._size; },
        set: function (n) { this._size = n; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecorateVo.prototype, "accessType", {
        get: function () { return this._accessType; },
        set: function (n) { this._accessType = n; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecorateVo.prototype, "amount", {
        get: function () { return this._amount; },
        set: function (n) { this._amount = n; },
        enumerable: true,
        configurable: true
    });
    DecorateVo.prototype.setData = function (data) {
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
    };
    DecorateVo.prototype.clear = function () {
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
    };
    DecorateVo.prototype.getConfigData = function () {
        var result = {
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
        };
        return result;
    };
    return DecorateVo;
}());
__reflect(DecorateVo.prototype, "DecorateVo");
//# sourceMappingURL=DecorateVo.js.map