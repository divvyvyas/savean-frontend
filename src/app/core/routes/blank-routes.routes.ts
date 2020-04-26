import { Routes } from '@angular/router';

export const BLANK_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => import('../../auth/auth.module').then(m => m.AuthModule)
    }
];