import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RichFooterComponent } from './footer/rich-footer/rich-footer.component';
import { ContactUsComponent } from './form/contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';

import { KurtbitFrontAngularModule } from 'kurtbit-front-angular';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Authentication/Login/login.component';
import { AuthenticationModule } from './Authentication/authentication.module';
import { AdminModule } from './Admin/admin.module';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    RichFooterComponent,
    ContactUsComponent,
    GalleryComponent,
    CarouselComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(homeRoutes),
    KurtbitFrontAngularModule,
    AuthenticationModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
