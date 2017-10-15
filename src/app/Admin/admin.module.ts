import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin.routing';
import { OfferComponent } from './Offer/offer.component';

@NgModule({
   declarations: [
    OfferComponent
   ],
   imports: [
    CommonModule,
    AdminRouting
   ],
   providers: [

   ]
})
export class AdminModule {

}