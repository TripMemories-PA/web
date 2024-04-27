import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Router } from '@angular/router';
import { NO_AUTH } from '../request.interceptor';
import { environment } from '../../../environnments/environment';

const URL = environment.apiUrl + '/auth/';
const httpOptions = {
    context: new HttpContext().set(NO_AUTH, true),
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    user: User | null = null;

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
        if (localStorage.getItem('user') !== null) {
            this.user = JSON.parse(localStorage.getItem('user')!);
        }
    }

    login(user: User) {
        return this.http.post(
            URL + 'login',
            {
                email: user.email,
                password: user.password,
            },
            httpOptions,
        );
    }

    register(user: User) {
        return this.http.post(
            URL + 'register',
            {
                username: user.username,
                email: user.email,
                password: user.password,
            },
            httpOptions,
        );
    }

    logout() {
        this.user = null;
        localStorage.removeItem('user');
        this.router.navigate(['/auth']);
    }
}
