import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-password-form',
    standalone: true,
    imports: [ButtonModule, InputTextModule],
    templateUrl: './password-form.component.html',
    styleUrl: './password-form.component.css',
})
export class PasswordFormComponent {}
