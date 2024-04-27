import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
    },
    {
        path: 'resetPassword',
        component: ResetPasswordComponent,
    },
];
