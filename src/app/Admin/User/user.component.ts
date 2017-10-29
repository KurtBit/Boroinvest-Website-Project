import { Component, OnInit } from '@angular/core';
import { UserModel } from './Model/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'admin-user',
    template: `
    <h2 style="margin-top: 100px;">Потребители</h2>
    <hr>
    <ul class="list-group" *ngFor="let user of users">
        <li class="list-group-item">Име: {{user.username}}</li>
    </ul>
    `
})
export class UserComponent implements OnInit{
    users: UserModel[] = [];

    constructor(
        private http: HttpClient
    ){}
    
    ngOnInit(): void {
        this.http.get('/api/v1/users')
            .subscribe((res: UserModel[]) => {
                this.users = res;
            });
    };  
};