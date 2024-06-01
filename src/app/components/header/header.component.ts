import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MenubarModule, NgOptimizedImage, ButtonModule, NgIf],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
    constructor(
        public auth: AuthService,
        private router: Router,
    ) {}

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Accueil',
                icon: 'pi pi-fw pi-home',
                routerLink: ['/'],
            },
            {
                label: 'Profil',
                icon: 'pi pi-fw pi-user',
                routerLink: ['/profil'],
            },
            {
                label: 'Mes Amis',
                icon: 'pi pi-fw pi-users',
                routerLink: ['/friends'],
            },
        ];
    }

    login() {
        this.router.navigate(['/login']);
    }

    disconnect() {
        this.auth.logout();
    }
}
