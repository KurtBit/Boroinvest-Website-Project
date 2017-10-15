import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthenticationRouting } from './authentication.routing';
import { LoginComponent } from './Login/login.component';
import { LogoutComponent } from './Logout/logout.component';
import { AuthenticationService } from './Services/authentication.service';
import { SessionService } from './Services/session.service';


@NgModule({
    declarations: [
        LoginComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthenticationRouting,
        HttpClientModule
    ],
    providers: [
        AuthenticationService,
        SessionService
    ]
})
export class AuthenticationModule { }