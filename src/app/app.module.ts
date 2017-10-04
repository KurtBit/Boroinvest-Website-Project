import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RichFooterComponent } from './footer/rich-footer/rich-footer.component';
import { ContactUsComponent } from './form/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    RichFooterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
