import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MemberService } from '../service/member.service'

@Component({
    moduleId: module.id,
    templateUrl: './login.html'
})

export class LoginComponent {
  
  loginForm : FormGroup;
  
  constructor(private memberService : MemberService, private router : Router) {
    this.loginForm = new FormGroup({
      'username' : new FormControl(),
      'password' : new FormControl()
    });
  
  }
  
  login() {
    var loginForm = this.loginForm;
    var formObj = loginForm.getRawValue(); // {name: '', description: ''}
    var serializedForm = JSON.stringify(formObj);
    
    this.memberService.login(serializedForm).subscribe(
        res => {
            var data = res.json();
            if(data.resultCode === '200') {
                document.getElementById('loginAnchor').style.display = 'none';
                document.getElementById('logoutAnchor').style.display = 'block';
                alert('로그인 되었습니다.');
                this.router.navigateByUrl('/member/mypage');
            } else {
                alert('로그인에 실패하였습니다.');
                this.router.navigateByUrl('/member/login');
            }
        },
        error => {
            alert('로그인에 실패하였습니다.');
            this.router.navigateByUrl('/member/login');
        }
     );
  }
    
    facebookLogin() {
        this.memberService.facebookLogin().subscribe(
            res => {
                var data = res.json();
                if(data.resultCode === '200') {
                    document.getElementById('loginAnchor').style.display = 'none';
                    document.getElementById('logoutAnchor').style.display = 'block';
                    alert('로그인 되었습니다.');
                    this.router.navigateByUrl('/member/mypage');
                } else {
                    alert('로그인에 실패하였습니다.');
                    this.router.navigateByUrl('/member/login');
                }
            },
            error => {
                alert('로그인에 실패하였습니다.');
                this.router.navigateByUrl('/member/login');
            }
        );
    }
    
  
}
