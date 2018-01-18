import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemberService } from './member/service/member.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './main.html'
})

export class AppComponent implements OnInit {

    constructor(private memberService : MemberService, private router : Router) {}

    ngOnInit() {
        this.memberService.getMemberInfo().subscribe(res => {
                var data = res.json();
                if(data.resultCode === '200') {
                   //document.getElementById('loginAnchor').innerHTML = '<a id="loginAnchor" (click)="logout()">로그아웃</a>';
                    document.getElementById('loginAnchor').style.display = 'none';
                    document.getElementById('logoutAnchor').style.display = 'block';
                } else {
                }
            }
        );
    }
}