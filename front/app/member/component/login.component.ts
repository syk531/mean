import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MemberService } from '../service/member.service'

@Component({
    moduleId: module.id,
    templateUrl: './login.html'
})

export class LoginComponent {
  
  loginForm : FormGroup;
  
  constructor(private memberService : MemberService) {
    this.loginForm = new FormGroup({
      'userId' : new FormControl(),
      'pwd' : new FormControl()
    });
  
  }
  
  loginUser() {
    var loginForm = this.loginForm;
    var formObj = loginForm.getRawValue(); // {name: '', description: ''}
    var serializedForm = JSON.stringify(formObj);
    
    this.memberService.loginUser(serializedForm).subscribe(res => {
      var data = res.json();
      if(data.resultCode === '200') {
        alert('로그인 되었습니다.');
      } else {
        alert('로그인에 실패하였습니다.');
      }
      
      //this.router.navigateByUrl('/member/login');
    });
  }
  
//  ngOnInit() {
//    
//      (function(d, s, id) {
//          var js, fjs = d.getElementsByTagName(s)[0];
//          if (d.getElementById(id)) return;
//          js = d.createElement(s); js.id = id;
//          js.src = 'https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.11&appId=1949513565298116';
//          fjs.parentNode.insertBefore(js, fjs);
//      }(document, 'script', 'facebook-jssdk'));
//    
//  }
  
}
