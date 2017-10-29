import { RouterModule, Routes } from '@angular/router';
import { OfferComponent } from './Offer/offer.component';
import { UserComponent } from './User/user.component';
import { UserAddComponent } from './User/Add/user-add.component';
import { AuthGuard } from '../Authentication/Guards/auth.guard';
import { AdminComponent } from './admin.component';
import { OfferAddComponent } from './Offer/Add/offer-add.component';

const AdminRoutes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
            { path: 'offers', component: OfferComponent },
            { path: 'offers/add', component: OfferAddComponent },
            { path: 'users', component: UserComponent },
            { path: 'users/add', component: UserAddComponent }
        ]
    }
]

export const AdminRouting = RouterModule.forChild(AdminRoutes);