"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const member_service_1 = require("../service/member.service");
let MypageComponent = class MypageComponent {
    constructor(memberService, router) {
        this.memberService = memberService;
        this.router = router;
    }
    ngOnInit() {
        this.memberService.getMemberInfo().subscribe(res => {
            var data = res.json();
            if (data.resultCode === '200') {
                this.userId = '회원아이디 : ' + data.userId;
                this.userName = '회원명 : ' + data.userName;
            }
            else {
                this.router.navigateByUrl('/member/login');
            }
        });
    }
};
MypageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './mypage.html',
    }),
    __metadata("design:paramtypes", [member_service_1.MemberService, router_1.Router])
], MypageComponent);
exports.MypageComponent = MypageComponent;
//# sourceMappingURL=mypage.component.js.map