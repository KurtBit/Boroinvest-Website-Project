import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RichFooterComponent } from './footer/rich-footer/rich-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RichFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
