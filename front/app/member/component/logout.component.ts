import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemberService } from '../service/member.service'

@Component({
    moduleId: module.id,
    template : '<ng-content></ng-content>'
})

export class LogoutComponent implements OnInit {
  
  constructor(private memberService : MemberService, private router : Router) {}
  
   ngOnInit() {
        this.memberService.logout().subscribe(res => {
            document.getElementById('loginAnchor').style.display = 'block';
            document.getElementById('logoutAnchor').style.display = 'none';
            alert('로그아웃 되었습니다.');
            this.router.navigateByUrl('/member/login');
        });
    }
}
