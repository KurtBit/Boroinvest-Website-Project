import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRouting } from './admin.routing';
import { OfferComponent } from './Offer/offer.component';
import { AdminComponent } from './admin.component';
import {HttpClientModule} from '@angular/common/http';
import { SidebarItemsComponent } from './Sidebar/sidebar-items.component';
import { SidebarItemComponent } from './Sidebar/sidebar-item/sidebar-item.component';

@NgModule({
    declarations: [
        AdminComponent,
        OfferComponent,
        SidebarItemsComponent,
        SidebarItemComponent
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