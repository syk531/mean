import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './login.html',
})

export class LoginComponent implements OnInit {
    ngOnInit() {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.11&appId=1949513565298116';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
  
    //로그인하면 마이페이지로 이동??
}
