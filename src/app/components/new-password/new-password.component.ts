import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { RouterLink } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-new-password',
    standalone: true,
    imports: [CardModule, ButtonModule, InputTextModule, RouterLink, ProgressBarModule, NgIf],
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
    constructor(private authServices: AuthService) {}

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
}
