import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { SignUpComponent } from './member/component/signUp.component';
import { LoginComponent } from './member/component/login.component';
import { MypageComponent } from './member/component/mypage.component';

import { MemberService } from './member/service/member.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRouting,
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        SignUpComponent,
        LoginComponent,
        MypageComponent
    ],
    providers:[MemberService],
    bootstrap: [AppComponent]
})

export class AppModule { }
