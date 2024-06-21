import { Component } from '@angular/core';
import { PersonalDataFormComponent } from '../../../components/personal-data-form/personal-data-form.component';
import { PasswordFormComponent } from '../../../components/password-form/password-form.component';

@Component({
    selector: 'app-my-profil',
    standalone: true,
    imports: [PersonalDataFormComponent, PasswordFormComponent],
    templateUrl: './my-profil.component.html',
    styleUrl: './my-profil.component.css',
})
export class MyProfilComponent {}
