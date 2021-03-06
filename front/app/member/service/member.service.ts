import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class MemberService {
  constructor(private http:Http) {}

  getMemberInfo() {
    return this.http.get('/api/member/getMemberInfo');
  }
  
  registUser(serializedForm) {
    var headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/api/member/registUser', serializedForm, {headers});
  }
  
  login(serializedForm) {
    var headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/api/member/login', serializedForm, {headers});
  }
    
    logout() {
        return this.http.get('/api/member/logout');
    }

    facebookLogin() {
        return this.http.get('/api/member/facebookLogin');
    }
}
