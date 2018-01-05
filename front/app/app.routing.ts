import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { SignUpComponent } from './member/component/signUp.component';
import { LoginComponent } from './member/component/login.component';

const routes: Routes = [
    { path: 'signUp', component: SignUpComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule]
})

export class AppRouting {}
