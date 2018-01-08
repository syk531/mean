import { Component, OnInit } from '@angular/core';

import { MemberService } from '../service/member.service';

@Component({
    moduleId: module.id,
    templateUrl: './mypage.html',
})

export class MypageComponent implements OnInit {
    //oninit에서 로그인 체크.
    //로그인 된 상태면 회원정보 보여주고
    //비로그인 이면 로그인 페이지로 이동하기.
    memberInfo;
  
    constructor(private memberService : MemberService) {}
  
    ngOnInit() {
        this.memberService.getMemberInfo().subscribe(data => {
                this.memberInfo = data.json();
                console.log('11111');
                console.dir(data.json());
                console.log('2222');
                console.dir(data);
            }
        );
    }
}
