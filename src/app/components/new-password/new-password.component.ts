import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-new-password',
    standalone: true,
    imports: [CardModule, ButtonModule, InputTextModule, RouterLink],
    templateUrl: './new-password.component.html',
    styleUrl: './new-password.component.css',
})
export class NewPasswordComponent {
    resetPassword: User = {
        email: '',
    };

    error: string | null = null;
    ok: string | null = null;
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
        this.resetOkError();
        this.authServices.resetPassword(this.resetPassword).subscribe({
            next: (res: any) => {
                this.ok =
                    'Si votre email est valide, vous allez recevoir un email avec un lien pour réinitialiser votre mot de passe.';
            },
            error: (err: Error) => {
                this.error = err.message;
            },
        });
    }
}
