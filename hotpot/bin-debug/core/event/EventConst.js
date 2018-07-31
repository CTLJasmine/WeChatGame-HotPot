var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 游戏内跨模块事件
 */
var EventConst = (function () {
    function EventConst() {
    }
    EventConst.LOAD_PROGRESS = "load_progress"; // 加载进度
    EventConst.EVENT_SHOW_POT = "event_show_pot"; // 打开火锅界面 
    return EventConst;
}());
__reflect(EventConst.prototype, "EventConst");
//# sourceMappingURL=EventConst.js.map