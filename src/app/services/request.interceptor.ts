import { Injectable } from '@angular/core';
import {
    HttpContextToken,
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { environment } from '../../environments/environment';

export const NO_AUTH = new HttpContextToken(() => false);

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers;

        if (!request.context.get(NO_AUTH)) {
            headers = new HttpHeaders({
                Authorization: `Bearer ${this.authService.user?.access_token}`,
            });
        }

        request = request.clone({ headers });

        return next.handle(request).pipe(
            tap({
                next: (res: any) => {},
                error: (err: any) => {
                    if (!request.context.get(NO_AUTH)) {
                        if (err.status === 401) {
                            this.authService.logout();
                        }
                    }
                },
            }),
            catchError((error: any) => {
                let errorMessage = '';

                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    console.log('client-side error');
                    if (!environment.production) {
                        console.log(error);
                    }
                    errorMessage = error.error.message;
                } else {
                    // server-side error
                    console.log('server-side error');
                    if (!environment.production) {
                        console.log(error);
                    }
                    if (Array.isArray(error.error.errors)) {
                        errorMessage = error.error.errors[0].message;
                    } else {
                        errorMessage = error.message;
                    }
                    /*if (Array.isArray(error.error.message)) {
                        errorMessage = error.error.message[0];
                    } else {
                        errorMessage = error.error.message;
                    }*/
                }

                return throwError(() => new Error(errorMessage));
            }),
        );
    }
}
