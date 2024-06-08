import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        MenubarModule,
        NgOptimizedImage,
        ButtonModule,
        NgIf,
        InputIconModule,
        InputTextModule,
        ReactiveFormsModule,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
    constructor(
        public auth: AuthService,
        private router: Router,
    ) {}

    items: MenuItem[] | undefined;
    showSearchInput: boolean = false;

    ngOnInit() {
        this.items = [
            {
                label: 'Carte',
                routerLink: ['/'],
            },
            {
                label: 'Feed',
                routerLink: ['/'],
            },
            {
                label: 'Magasin',
                routerLink: ['/'],
            },
            {
                label: 'Profil',
                routerLink: ['/profil'],
            },
            {
                label: 'Mes amis',
                routerLink: ['/friends'],
            },
        ];
    }

    toggleSearchInput() {
        this.showSearchInput = !this.showSearchInput;
    }

    goTo(path: string) {
        this.router.navigate([path]);
    }

    disconnect() {
        this.auth.logout();
    }
}
