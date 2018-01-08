import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MemberService {
    constructor(private http:Http) {}
  
    getMemberInfo() {
        return this.http.get('/api/member/getMemberInfo');
    }
}
