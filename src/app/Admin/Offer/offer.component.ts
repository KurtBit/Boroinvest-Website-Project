import { Component, OnInit } from '@angular/core';
import { OfferModel } from './Model/offer.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'admin-offer',
    template: `
        <h2 style="margin-top: 100px;">Покажи Оферти</h2>
        <hr>

        <div>
            <ul>
                <li *ngFor="let offer of Offers">
                    {{offer.name}}
                </li>
            </ul>
        </div>
    `
})
export class OfferComponent implements OnInit {
    public Offers: OfferModel[];

    constructor(
        private http: HttpClient)
    { }

    ngOnInit(): void {
        this.http.get('/api/v1/offers')
            .subscribe((res: OfferModel[]) => {
                this.Offers = res;
            });
    }
}