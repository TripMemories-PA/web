import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Router } from '@angular/router';
import { User } from '../../models/user';

class UserService {}

@Component({
    selector: 'app-password-form',
    standalone: true,
    imports: [
        ButtonModule,
        InputTextModule,
        FormsModule,
        IconFieldModule,
        InputIconModule,
        IconFieldModule,
        InputTextModule,
    ],
    templateUrl: './password-form.component.html',
    styleUrl: './password-form.component.css',
})
export class PasswordFormComponent {
    user: User = {
        username: '',
        email: '',
        password: '',
    };
    error: string | null = null;
    hide: boolean = true;
    hide1: boolean = true;
    resetPassword: boolean = false;
    isLoading: boolean = false;

    constructor() {}
}
