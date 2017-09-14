"use strict";
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AppState_1 = require("../States/AppState");
var UserCenterMyFollowingsUser_1 = require("./UserCenterMyFollowingsUser");
//用户中心我的粉丝组件
var UserCenterMyFans = /** @class */ (function (_super) {
    __extends(UserCenterMyFans, _super);
    function UserCenterMyFans(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            //临时填充信息
            userFans: [userFanInfo, userFanInfo, userFanInfo]
        };
        return _this;
    }
    UserCenterMyFans.prototype.render = function () {
        //state转换为JSX
        var userFans = this.state.userFans.map(function (item) { return (React.createElement(UserCenterMyFollowingsUser_1.UserCenterMyFollowingsUser, { userFanInfo: item })); });
        //添加分隔线
        for (var i = 1; i < userFans.length; i += 2) {
            userFans.splice(i, 0, React.createElement("hr", null));
        }
        return (React.createElement("div", { className: 'user-center-myfans' }, userFans));
    };
    return UserCenterMyFans;
}(React.Component));
exports.UserCenterMyFans = UserCenterMyFans;
//临时填充信息
var userFanInfo = new AppState_1.UserFanInfo();
userFanInfo.avatarImgURL = '../img/001.jpg';
userFanInfo.fans = 666;
userFanInfo.posts = 233;
userFanInfo.name = '董松松松';
//# sourceMappingURL=UserCenterMyFans.js.map