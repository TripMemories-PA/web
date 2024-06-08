import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [LoginFormComponent, NgOptimizedImage],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
