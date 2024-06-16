import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './services/request.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(HttpClientModule),
        importProvidersFrom(
            NgxMapboxGLModule.withConfig({
                accessToken: 'YOUR_MAP',
            }),
        ),
        provideRouter(routes),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true,
        },
        provideAnimations(),
    ],
};
