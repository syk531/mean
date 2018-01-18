"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const signUp_component_1 = require("./member/component/signUp.component");
const login_component_1 = require("./member/component/login.component");
const logout_component_1 = require("./member/component/logout.component");
const mypage_component_1 = require("./member/component/mypage.component");
const routes = [
    { path: 'member/mypage', component: mypage_component_1.MypageComponent },
    { path: 'member/signUp', component: signUp_component_1.SignUpComponent },
    { path: 'member/login', component: login_component_1.LoginComponent },
    { path: 'member/logout', component: logout_component_1.LogoutComponent }
];
let AppRouting = class AppRouting {
};
AppRouting = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRouting);
exports.AppRouting = AppRouting;
//# sourceMappingURL=app.routing.js.map