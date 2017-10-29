import { Component, OnInit } from '@angular/core';
import { UserModel } from './Model/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'admin-user',
    template: `
    <h2 style="margin-top: 100px;">Покажи Потребители</h2>
    <hr>

    <table id="mytable" class="table table-bordred table-striped">
        <thead>
            <th>Име</th>
            <th>Права</th>
            <th>Дата</th>
            <th>Промени</th>
            <th>Изтрий</th>
        </thead>
        <tbody>
            <tr *ngFor="let user of Users">
                <td>
                    <a href="#">{{user.username}}</a>
                </td>
                <td>Администратор</td>
                <td>{{user.createdAt | date}}</td>
                <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p></td>
                <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>
            </tr>
        </tbody>
    </table>
    `
})
export class UserComponent implements OnInit{
    Users: UserModel[] = [];

    constructor(
        private http: HttpClient
    ){}
    
    ngOnInit(): void {
        this.http.get('/api/v1/users')
            .subscribe((res: UserModel[]) => {
                this.Users = res;
            });
    };  
};