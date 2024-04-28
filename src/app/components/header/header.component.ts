import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MenubarModule, NgOptimizedImage, ButtonModule, NgIf],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;

    isConnect: boolean = false;

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
                routerLink: ['/contact'],
            },
        ];
    }
}
