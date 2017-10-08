import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RichFooterComponent } from './footer/rich-footer/rich-footer.component';
import { ContactUsComponent } from './form/contact-us/contact-us.component';
import { OfferComponent } from './our-offer/offer/offer.component';
import { GalleryComponent } from './gallery/gallery.component';

import { KurtbitFrontAngularModule } from 'kurtbit-front-angular';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    RichFooterComponent,
    ContactUsComponent,
    OfferComponent,
    GalleryComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    KurtbitFrontAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
