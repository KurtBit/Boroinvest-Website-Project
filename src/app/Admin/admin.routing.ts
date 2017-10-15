import { RouterModule, Routes } from '@angular/router';
import { OfferComponent } from './Offer/offer.component';

const AdminRoutes: Routes = [
    {
        path: 'admin', children: [
            { path: 'offer', component: OfferComponent }
        ]
    }
]

export const AdminRouting = RouterModule.forChild(AdminRoutes);