import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { NgOptimizedImage } from '@angular/common';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';

@Component({
    selector: 'app-register-page',
    standalone: true,
    imports: [LoginFormComponent, NgOptimizedImage, RegisterFormComponent],
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {}
