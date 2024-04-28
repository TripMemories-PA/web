import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { ProfilService } from '../../services/profil/profil.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { NgIf } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { UpdateMeModel } from '../../models/updateme.model';

@Component({
    selector: 'app-my-informations',
    standalone: true,
    imports: [CardModule, ButtonModule, InputTextModule, FormsModule, NgIf, ProgressBarModule],
    templateUrl: './my-informations.component.html',
    styleUrl: './my-informations.component.css',
})
export class MyInformationsComponent implements OnInit {
    ok: string | null = null;
    error: string | null = null;

    isLoading: boolean = false;

    @Input() user: User = {
        firstname: undefined,
        lastname: undefined,
        email: undefined,
        username: undefined,
    };

    userPlaceholder: User = {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
    };

    constructor(
        private profilServices: ProfilService,
        private router: Router,
        private authService: AuthService,
    ) {}

    ngOnInit(): void {
        this.userPlaceholder = this.user;
    }

    submit(): void {
        this.error = null;
        this.isLoading = true;
        this.profilServices.updateMe(this.user).subscribe({
            next: (res: UpdateMeModel) => {
                this.isLoading = false;
                this.ok = 'Changement effectué avec succès';
                this.updateLocalStorage(res);
                setTimeout(() => {
                    this.ok = null;
                }, 3000);
            },
            error: (err: Error) => {
                this.isLoading = false;
                this.error = err.message;
            },
        });
    }

    private updateLocalStorage(user: UpdateMeModel): void {
        const userLocalStorage: User = JSON.parse(localStorage.getItem('user') as string);
        userLocalStorage.firstname = user.firstname;
        userLocalStorage.lastname = user.lastname;
        userLocalStorage.email = user.email;
        userLocalStorage.username = user.username;
        this.authService.user!.access_token = userLocalStorage.access_token;
        localStorage.setItem('user', JSON.stringify(userLocalStorage));
    }
}
