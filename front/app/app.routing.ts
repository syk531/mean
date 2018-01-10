import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { SignUpComponent } from './member/component/signUp.component';
import { LoginComponent } from './member/component/login.component';
import { MypageComponent } from './member/component/mypage.component';

const routes: Routes = [
    { path: 'member/mypage', component: MypageComponent },
    { path: 'member/signUp', component: SignUpComponent },
    { path: 'member/login', component: LoginComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule]
})

export class AppRouting {}
