import { RouterModule, Routes } from '@angular/router';
import { OfferComponent } from './Offer/offer.component';
import { AuthGuard } from '../Authentication/Guards/auth.guard';

const AdminRoutes: Routes = [
    {
        path: 'admin',canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
            { path: 'offer', component: OfferComponent }
        ]
    }
]

export const AdminRouting = RouterModule.forChild(AdminRoutes);