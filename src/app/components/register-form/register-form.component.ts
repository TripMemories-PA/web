import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageModule } from 'primeng/message';
import { NgIf } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
    selector: 'app-register-form',
    standalone: true,
    imports: [
        CardModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        IconFieldModule,
        InputIconModule,
        MessageModule,
        NgIf,
        ProgressBarModule,
    ],
    templateUrl: './register-form.component.html',
    styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
    user: User = {
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    };

    confirmPassword = '';
    hide1: boolean = true;
    hide2: boolean = true;
    error: string | null = null;
    ok: string | null = null;

    isLoading: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    register(): void {
        this.error = null;
        if (this.isLoading) return;
        this.isLoading = true;
        if (this.user.password !== this.confirmPassword) {
            this.error = 'Les mots de passe ne correspondent pas';
            return;
        }

        this.authService.register(this.user).subscribe({
            next: (res: any) => {
                this.isLoading = false;
                const user: User = res.user;
                user.access_token = res.access_token;

                this.authService.user = user;
                localStorage.setItem('user', JSON.stringify(user));
                this.ok = 'Inscription réussie !';
                this.router.navigate(['/profil']);
            },
            error: (err: Error) => {
                this.isLoading = false;
                this.error = err.message;
            },
        });
    }
}
