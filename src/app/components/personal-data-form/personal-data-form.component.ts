import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-personal-data-form',
    standalone: true,
    imports: [InputTextModule, ButtonModule],
    templateUrl: './personal-data-form.component.html',
    styleUrl: './personal-data-form.component.css',
})
export class PersonalDataFormComponent {}
