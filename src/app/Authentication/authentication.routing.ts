import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { LogoutComponent } from './Logout/logout.component';

const authenticationRoutes: Routes = [
    {
        path: 'authentication', children: [
            {path: 'login', component: LoginComponent},
            {path: 'logout', component: LogoutComponent}
        ]
    }
]

export const AuthenticationRouting =  RouterModule.forChild(authenticationRoutes);