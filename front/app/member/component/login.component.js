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
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const member_service_1 = require("../service/member.service");
let LoginComponent = class LoginComponent {
    constructor(memberService, router) {
        this.memberService = memberService;
        this.router = router;
        this.loginForm = new forms_1.FormGroup({
            'username': new forms_1.FormControl(),
            'password': new forms_1.FormControl()
        });
    }
    login() {
        var loginForm = this.loginForm;
        var formObj = loginForm.getRawValue(); // {name: '', description: ''}
        var serializedForm = JSON.stringify(formObj);
        this.memberService.login(serializedForm).subscribe(res => {
            var data = res.json();
            if (data.resultCode === '200') {
                document.getElementById('loginAnchor').style.display = 'none';
                document.getElementById('logoutAnchor').style.display = 'block';
                alert('로그인 되었습니다.');
                this.router.navigateByUrl('/member/mypage');
            }
            else {
                alert('로그인에 실패하였습니다.');
                this.router.navigateByUrl('/member/login');
            }
        }, error => {
            alert('로그인에 실패하였습니다.');
            this.router.navigateByUrl('/member/login');
        });
    }
    facebookLogin() {
        this.memberService.facebookLogin().subscribe(res => {
            var data = res.json();
            if (data.resultCode === '200') {
                document.getElementById('loginAnchor').style.display = 'none';
                document.getElementById('logoutAnchor').style.display = 'block';
                alert('로그인 되었습니다.');
                this.router.navigateByUrl('/member/mypage');
            }
            else {
                alert('로그인에 실패하였습니다.');
                this.router.navigateByUrl('/member/login');
            }
        }, error => {
            alert('로그인에 실패하였습니다.');
            this.router.navigateByUrl('/member/login');
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './login.html'
    }),
    __metadata("design:paramtypes", [member_service_1.MemberService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map