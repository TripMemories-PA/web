import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../../services/profil/profil.service';
import { AuthService } from '../../services/auth/auth.service';
import { ProfilInfoComponent } from '../../components/profil-info/profil-info.component';

@Component({
    selector: 'app-profil-page',
    standalone: true,
    imports: [ProfilInfoComponent],
    templateUrl: './profil-page.component.html',
    styleUrl: './profil-page.component.css',
})
export class ProfilPageComponent implements OnInit {
    profilPic: string | undefined = undefined;

    constructor(
        private profilService: ProfilService,
        private authServices: AuthService,
    ) {
        const user = JSON.parse(localStorage.getItem('user') as string);
        console.log(this.authServices.user);
        if (!this.authServices.user?.access_token) {
            this.authServices.logout();
            return;
        }
        if (this.authServices.user?.avatar) {
            this.profilPic = user.avatar.location;
        }
    }

    ngOnInit(): void {
        this.profilService.getMe().subscribe({
            next: (user: any) => {
                user.access_token = this.authServices.user?.access_token;
                this.authServices.user = user;
                localStorage.setItem('user', JSON.stringify(user));
                console.log(this.authServices.user);
                if (this.authServices.user?.avatar) {
                    this.profilPic = user.avatar.location;
                }
            },
        });
    }
}
