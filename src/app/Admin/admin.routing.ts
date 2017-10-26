import { RouterModule, Routes } from '@angular/router';
import { OfferComponent } from './Offer/offer.component';
import { UserComponent } from './User/user.component';
import { AuthGuard } from '../Authentication/Guards/auth.guard';
import { AdminComponent } from './admin.component';

const AdminRoutes: Routes = [
    {
        path: 'admin', component: AdminComponent,
            canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
            { path: 'offer', component: OfferComponent },
            { path: 'user', component: UserComponent }
        ]
    }
]

export const AdminRouting = RouterModule.forChild(AdminRoutes);