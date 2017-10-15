import { Component } from '@angular/core';
import { OfferModel } from './offer.model';

@Component({
    selector: 'admin-offer',
    template: `
        <h2>Add Offer</h2>
        <hr>
        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" class="form-control"
                    [(ngModel)]="model.name" name="name" required
                />
            </div>

            <div class="form-group">
                <label for="img">Img</label>
                <input type="text" id="img" class="form-control"
                    [(ngModel)]="model.img" name="img"
                />
            </div>

            <div class="form-group">
                <label for="content">Content</label>
                <textarea id="content"  class="form-control"
                    [(ngModel)]="model.content" name="content"
                ></textarea>
            </div>

            <div class="form-group">
                <label for="date">Date</label>
                <input type="date" id="date" class="form-control"
                    [(ngModel)]="model.date" name="date" required
                />
            </div>

            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" id="price" class="form-control"
                    [(ngModel)]="model.price" name="price" required
                />
            </div>

            <input type="submit" value="Login" class="btn btn-default">
        </form>
    `
})
export class OfferComponent {
    public model: OfferModel = new OfferModel('', '', new Date(), '', 0, '');

    public onSubmit() {
        console.log(this.model);
    }
}