import { Component } from '@angular/core';
import { ChangePasswordComponent } from '../../components/change-password/change-password.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-password-page',
    standalone: true,
    imports: [ChangePasswordComponent],
    templateUrl: './new-password-page.component.html',
    styleUrl: './new-password-page.component.css',
})
export class NewPasswordPageComponent {
    constructor(private router: Router) {}
}
