import { Component } from '@angular/core';
import { UserModel } from './user.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'admin-user',
    template: `
        <h2 style="margin-top: 100px;">Добави Потребител</h2>
        <hr>
        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
            <div class="form-group">
                <label for="username">Име</label>
                <input type="text" id="username" class="form-control"
                    [(ngModel)]="model.username" name="username" required
                />
            </div>

            <div class="form-group">
                <label for="password">Парола</label>
                <input type="password" id="password" class="form-control"
                [(ngModel)]="model.password" name="password" required
                />
            </div>

            <div class="form-group">
                <label for="password">Потвърди Паролата</label>
                <input type="password" id="password" class="form-control"
                [(ngModel)]="model.password" name="password" required
                />
            </div>

            <input type="submit" value="Добави" class="btn btn-success">
        </form>
    `
})
export class UserComponent {
    constructor(
        private http: HttpClient
    ){}

    public model: UserModel = new UserModel('', '', new Date());

    public onSubmit() {
        this.http
            .post('/api/v1/user', this.model)
            .subscribe();

        console.log(this.model);
    }
}