import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NewPasswordPageComponent } from './pages/new-password-page/new-password-page.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
    },
    {
        path: 'forgotPassword',
        component: ResetPasswordComponent,
    },
    {
        path: 'resetPassword',
        component: NewPasswordPageComponent,
    },
];
