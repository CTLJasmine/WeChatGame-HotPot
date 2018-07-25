var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 角色类型
var ROLE_TYPE;
(function (ROLE_TYPE) {
    ROLE_TYPE[ROLE_TYPE["NORMAL"] = 1] = "NORMAL";
    ROLE_TYPE[ROLE_TYPE["SPECIAL"] = 2] = "SPECIAL";
})(ROLE_TYPE || (ROLE_TYPE = {}));
// 角色数据模型
var RoleModel = (function () {
    function RoleModel() {
        this._npcList = []; // 角色数据
        this._mIsInit = false; // 是否已经完成角色信息的解析
    }
    Object.defineProperty(RoleModel, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new RoleModel();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleModel.prototype, "npcData", {
        get: function () { return this._npcList; },
        enumerable: true,
        configurable: true
    });
    RoleModel.prototype.initModel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configData;
            return __generator(this, function (_a) {
                configData = RES.getRes("npc_json");
                this.decode(configData);
                return [2 /*return*/];
            });
        });
    };
    RoleModel.prototype.decode = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var key = data_1[_i];
            this._npcList.push(key);
        }
        this._mIsInit = true;
    };
    Object.defineProperty(RoleModel.prototype, "isInit", {
        get: function () {
            return this._mIsInit;
        },
        enumerable: true,
        configurable: true
    });
    return RoleModel;
}());
__reflect(RoleModel.prototype, "RoleModel");
//# sourceMappingURL=RoleModel.js.map