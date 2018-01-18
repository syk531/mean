import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemberService } from '../service/member.service';

@Component({
    moduleId: module.id,
    templateUrl: './mypage.html',
})

export class MypageComponent implements OnInit {
    //oninit에서 로그인 체크.
    //로그인 된 상태면 회원정보 보여주고
    //비로그인 이면 로그인 페이지로 이동하기.
    private userId : string;
    private userName : string;
  
    constructor(private memberService : MemberService, private router : Router) {}
  
    ngOnInit() {
        this.memberService.getMemberInfo().subscribe(res => {
                var data = res.json();
                if(data.resultCode === '200') {
                    this.userId = '회원아이디 : ' + data.userId;
                    this.userName = '회원명 : ' + data.userName;
                } else {
                    this.router.navigateByUrl('/member/login');
                }
            }
        );
    }
}
