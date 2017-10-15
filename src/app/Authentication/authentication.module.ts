import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRouting } from './authentication.routing';
import { LoginComponent } from './Login/login.component';
import { LogoutComponent } from './Logout/logout.component';

@NgModule({
    declarations: [
        LoginComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        AuthenticationRouting
    ], 
    providers: [
    ]
})
export class AuthenticationModule {}