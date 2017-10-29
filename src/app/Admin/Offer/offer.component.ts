import { Component, OnInit } from '@angular/core';
import { OfferModel } from './Model/offer.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'admin-offer',
    template: `
        <h2 style="margin-top: 100px;">Покажи Оферти</h2>
        <hr>

        <table id="mytable" class="table table-bordred table-striped">
            <thead>
                <th>Име</th>
                <th>Автор</th>
                <th>Дата</th>
                <th>Цена</th>
                <th>Промени</th>
                <th>Изтрий</th>
            </thead>
            <tbody>
                <tr *ngFor="let offer of Offers">
                    <td>
                        <a href="#">{{offer.name}}</a>
                    </td>
                    <td>{{offer.author}}</td>
                    <td>{{offer.date | date }}</td>
                    <td>{{offer.price}}</td>
                    <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p></td>
                    <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>
                </tr>
            </tbody>
        </table>
    `
})
export class OfferComponent implements OnInit {
    public Offers: OfferModel[];

    constructor(
        private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get('/api/v1/offers')
            .subscribe((res: OfferModel[]) => {
                this.Offers = res;
            });
    }
}