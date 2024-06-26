import { Routes } from '@angular/router';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NewPasswordPageComponent } from './pages/new-password-page/new-password-page.component';
import { ProfilPageComponent } from './pages/profil-page/profil-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CitySearchPageComponent } from './pages/city-search-page/city-search-page.component';
import { MonumentSearchPageComponent } from './pages/monument-search-page/monument-search-page.component';
import { PoiPageComponent } from './pages/poi-page/poi-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

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
        component: MonumentSearchPageComponent,
    },
    {
        path: 'poi/:id',
        component: PoiPageComponent,
    },
    {
        path: 'post/:id',
        component: PostPageComponent,
    },
    {
        path: 'profil',
        component: ProfilPageComponent,
    },
    {
        path: 'user/:id',
        component: UserPageComponent,
    },
    {
        path: 'feed',
        component: FeedPageComponent,
    },
    {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'auth',
    },
];
