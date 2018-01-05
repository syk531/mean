import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { SignUpComponent } from './member/component/signUp.component';
import { LoginComponent } from './member/component/login.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRouting
    ],
    declarations: [
        AppComponent,
        SignUpComponent,
        LoginComponent
    ],
    providers:[],
    bootstrap: [AppComponent]
})

export class AppModule { }
