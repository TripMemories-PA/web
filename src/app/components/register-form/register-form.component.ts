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

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    register(): void {
        this.error = null;

        if (this.user.password !== this.confirmPassword) {
            this.error = 'Les mots de passe ne correspondent pas';
            return;
        }

        this.authService.register(this.user).subscribe({
            next: (_: any) => {
                this.ok = 'Inscription réussie !';
            },
            error: (err: Error) => {
                this.error = err.message;
            },
        });
    }
}
