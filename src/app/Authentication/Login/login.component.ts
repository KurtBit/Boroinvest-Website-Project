import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'auth-login',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <h2>Login</h2>
                    <hr>
                    <div class="well">
                        <div class="auth-login">
                            <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" id="username" class="form-control"
                                        [(ngModel)]="model.username" name="username"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" id="password"  class="form-control"
                                        [(ngModel)]="model.password" name="password"
                                    />
                                </div>

                                <input type="submit" value="Login" class="btn btn-default">
                            </form>
                        </div>
                    </div>                
                </div>            
            </div>
        </div>
    `
})
export class LoginComponent implements OnInit{
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    public model: {
        username: string,
        password: string
    } = {
        username: '',
        password: ''
    }

    ngOnInit(): void {
        if(this.authenticationService.isAuthenticated()){
            this.router.navigateByUrl('');
        }
    }

    public onSubmit() {
        if (this.authenticationService.login(this.model.username, this.model.password)) {
            this.router.navigateByUrl('');
        }
    }
}