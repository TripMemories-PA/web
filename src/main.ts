import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { inject } from '@vercel/analytics';
import { environment } from './environments/environment';

if (environment.production) {
    inject();
}

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
