import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageModule } from 'primeng/message';

@Component({
    selector: 'app-new-password',
    standalone: true,
    imports: [
        CardModule,
        ButtonModule,
        InputTextModule,
        RouterLink,
        ProgressBarModule,
        NgIf,
        CheckboxModule,
        FormsModule,
        IconFieldModule,
        InputIconModule,
        MessageModule,
        NgOptimizedImage,
    ],
    templateUrl: './new-password.component.html',
    styleUrl: './new-password.component.css',
})
export class NewPasswordComponent {
    resetPassword: User = {
        email: '',
    };

    error: string | null = null;
    ok: string | null = null;
    isLoading: boolean = false;

    constructor(
        private authServices: AuthService,
        private router: Router,
    ) {}

    private resetOkError() {
        setTimeout(() => {
            this.error = null;
        }, 7000);
        setTimeout(() => {
            this.ok = null;
        }, 10000);
    }

    resetPasswordAsks(): void {
        if (!this.resetPassword.email) {
            this.error = 'Votre email est requis avant de tenter une réinitialisation 😉';
            return;
        }
        if (this.isLoading) return;
        this.isLoading = true;
        this.resetOkError();
        this.authServices.resetPassword(this.resetPassword).subscribe({
            next: (_: any) => {
                this.ok =
                    'Si votre email est valide, vous allez recevoir un email avec un lien pour réinitialiser votre mot de passe.';
            },
            error: (err: Error) => {
                this.error = err.message;
            },
        });
    }

    goTo(path: string) {
        this.router.navigate([path]);
    }
}
