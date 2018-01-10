import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'

import { MemberService } from '../service/member.service'

@Component({
  moduleId: module.id,
  selector: 'signUP-selector',
  templateUrl: './signUp.html',
})

export class SignUpComponent {
  
  signUpForm : FormGroup;
  
  constructor(private memberService : MemberService, private router : Router) {
    this.signUpForm = new FormGroup({
      'userId' : new FormControl(),
      'pwd' : new FormControl(),
      'userName' : new FormControl()
    });
  }
  
  onSubmit() {
    var signUpForm = this.signUpForm;
    var formObj = signUpForm.getRawValue(); // {name: '', description: ''}
    var serializedForm = JSON.stringify(formObj);
    
    this.memberService.registUser(serializedForm).subscribe(res => {
      var data = res.json();
      if(data.resultCode === '200') {
        alert('회원가입 되었습니다.');
      } else {
        alert('회원가입에 실패하였습니다.');
      }
      
      this.router.navigateByUrl('/member/login');
    });
  }
}
