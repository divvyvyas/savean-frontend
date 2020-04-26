import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

export const ALL_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../../home/home.module').then(m => m.HomeModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'change-password',
        loadChildren: () => import('../../change-password/change-password.module').then(m => m.ChangePasswordModule),
        canActivate: [AuthGuard]
    }
];