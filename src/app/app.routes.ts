import { Routes } from '@angular/router';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NewPasswordPageComponent } from './pages/new-password-page/new-password-page.component';
import { ProfilPageComponent } from './pages/profil-page/profil-page.component';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CitySearchPageComponent } from './pages/city-search-page/city-search-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent,
    },
    {
        path: 'register',
        component: RegisterPageComponent,
    },
    {
        path: 'forgotPassword',
        component: ResetPasswordComponent,
    },
    {
        path: 'resetPassword',
        component: NewPasswordPageComponent,
    },
    {
        path: 'search-city',
        component: CitySearchPageComponent,
    },
    {
        path: 'search-city/:searchTerm',
        component: CitySearchPageComponent,
    },
    {
        path: 'maps',
        component: MapPageComponent,
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
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'auth',
    },
];
