import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRouting } from './admin.routing';
import { OfferComponent } from './Offer/offer.component';
import { AdminComponent } from './admin.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AdminComponent,
        OfferComponent
    ],
    imports: [
        CommonModule,
        AdminRouting,
        FormsModule,
        HttpClientModule
    ],
    providers: [

    ]
})
export class AdminModule {

}