"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const app_routing_1 = require("./app.routing");
const app_component_1 = require("./app.component");
const signUp_component_1 = require("./member/component/signUp.component");
const login_component_1 = require("./member/component/login.component");
const logout_component_1 = require("./member/component/logout.component");
const mypage_component_1 = require("./member/component/mypage.component");
const member_service_1 = require("./member/service/member.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_1.AppRouting,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            signUp_component_1.SignUpComponent,
            login_component_1.LoginComponent,
            logout_component_1.LogoutComponent,
            mypage_component_1.MypageComponent
        ],
        providers: [member_service_1.MemberService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map