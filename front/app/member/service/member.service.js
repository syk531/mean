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
const http_1 = require("@angular/http");
let MemberService = class MemberService {
    constructor(http) {
        this.http = http;
    }
    getMemberInfo() {
        return this.http.get('/api/member/getMemberInfo');
    }
    registUser(serializedForm) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('/api/member/registUser', serializedForm, { headers });
    }
    login(serializedForm) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('/api/member/login', serializedForm, { headers });
    }
    logout() {
        return this.http.get('/api/member/logout');
    }
    facebookLogin() {
        return this.http.get('/api/member/facebookLogin');
    }
};
MemberService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MemberService);
exports.MemberService = MemberService;
//# sourceMappingURL=member.service.js.map