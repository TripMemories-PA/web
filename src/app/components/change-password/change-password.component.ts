import { Component, OnInit } from '@angular/core';
import { ResetPasswordModel } from '../../models/reset-password.model';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PasswordFieldComponent } from '../password-field/password-field.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-change-password',
    standalone: true,
    imports: [CardModule, ButtonModule, PasswordFieldComponent, NgIf],
    templateUrl: './change-password.component.html',
    styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent implements OnInit {
    user: ResetPasswordModel = {
        password: '',
        checkPassword: '',
    };

    token: string | undefined = undefined;

    ok: string | null = null;
    error: string | null = null;
    constructor(
        private authService: AuthService,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            if (!params['token']) {
                this.router.navigate(['/auth']);
            }
            this.token = params['token'];
        });
    }

    resetPassword(): void {
        if (!this.user.password || !this.user.checkPassword) {
            this.error = 'Vous réinitialisez votre mot de passe sans le changer ? 🤔';
            return;
        }
        if (this.user.password !== this.user.checkPassword) {
            this.error = 'Les mots de passe ne correspondent pas';
            return;
        }
        if (!this.token) {
            this.router.navigate(['/auth']);
            return;
        }
        this.authService.newPassword(this.user, this.token).subscribe({
            next: (data: any) => {
                this.error = '';
                this.ok = data.message;
                setTimeout(() => {
                    this.router.navigate(['/auth']);
                }, 7000);
            },
            error: (err) => {
                this.error = err.message;
                setTimeout(() => {
                    this.router.navigate(['/auth']);
                }, 10000);
            },
        });
    }

    redirect(): void {
        this.router.navigate(['/auth']);
    }
}
