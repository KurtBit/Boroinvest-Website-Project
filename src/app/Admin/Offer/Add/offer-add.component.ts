import { Component } from '@angular/core';
import { OfferModel } from '../Model/offer.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'admin-offer-add',
    template: `
        <h2 style="margin-top: 100px;">Добави Оферта</h2>
        <hr>
        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
            <div class="form-group">
                <label for="name">Име</label>
                <input type="text" id="name" class="form-control"
                    [(ngModel)]="model.name" name="name" required
                />
            </div>

            <div class="form-group">
                <label for="img">Изображение</label>
                <input type="text" id="img" class="form-control"
                    [(ngModel)]="model.img" name="img"
                />
            </div>

            <div class="form-group">
                <label for="content">Съдържание</label>
                <textarea id="content"  class="form-control"
                    [(ngModel)]="model.content" name="content"
                ></textarea>
            </div>

            <div class="form-group">
                <label for="date">Дата</label>
                <input type="date" id="date" class="form-control"
                    [(ngModel)]="model.date" name="date" required
                />
            </div>

            <div class="form-group">
                <label for="price">Цена</label>
                <input type="text" id="price" class="form-control"
                    [(ngModel)]="model.price" name="price" required
                />
            </div>

            <input type="submit" value="Добави" class="btn btn-success">
        </form>
    `
})
export class OfferAddComponent {
    constructor(
        private http: HttpClient
    ){}

    public model: OfferModel = new OfferModel('', '', new Date(), '', 0, '');

    public onSubmit() {
        this.http
            .post('/api/v1/offers', this.model)
            .subscribe();

        console.log(this.model);
    }
}