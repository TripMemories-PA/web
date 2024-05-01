import { Component, Input } from '@angular/core';
import { ResetPasswordModel } from '../../models/reset-password.model';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
    selector: 'app-password-field',
    standalone: true,
    imports: [ButtonModule, FormsModule, InputTextModule, IconFieldModule, InputIconModule],
    templateUrl: './password-field.component.html',
    styleUrl: './password-field.component.css',
})
export class PasswordFieldComponent {
    @Input() user: ResetPasswordModel | undefined = {};
    hide: boolean = true;
    hide2: boolean = true;

    constructor() {}
}
