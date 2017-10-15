import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
    selector: 'auth-logout',
    template: ''
})
export class LogoutComponent implements OnInit {
    public constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    public ngOnInit(): void {
        this.authenticationService.logout();

        this.router.navigateByUrl('/');
    }
}