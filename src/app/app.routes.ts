import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NewPasswordPageComponent } from './pages/new-password-page/new-password-page.component';
import { ProfilPageComponent } from './pages/profil-page/profil-page.component';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
    },
    { path: 'login', component: LoginPageComponent },
    {
        path: 'forgotPassword',
        component: ResetPasswordComponent,
    },
    {
        path: 'resetPassword',
        component: NewPasswordPageComponent,
    },
    {
        path: 'profil',
        component: ProfilPageComponent,
    },
    {
        path: 'friends',
        component: FriendsPageComponent,
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'auth',
    },
];
