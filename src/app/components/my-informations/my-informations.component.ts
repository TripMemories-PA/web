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

@Component({
    selector: 'app-my-informations',
    standalone: true,
    imports: [CardModule, ButtonModule, InputTextModule, FormsModule, NgIf],
    templateUrl: './my-informations.component.html',
    styleUrl: './my-informations.component.css',
})
export class MyInformationsComponent implements OnInit {
    ok: string | null = null;
    error: string | null = null;

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
        this.profilServices.updateMe(this.user).subscribe({
            next: (res: any) => {
                this.ok = res.message;
                const token = this.authService.user?.access_token;
                this.authService.user = res.user;
                this.authService.user!.access_token = token;
                localStorage.setItem('user', JSON.stringify(res.user));

                setTimeout(() => {
                    this.ok = null;
                }, 3000);
            },
            error: (err: Error) => {
                this.error = err.message;
            },
        });
    }
}
