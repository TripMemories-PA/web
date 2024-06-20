import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../../services/profil/profil.service';
import { AuthService } from '../../services/auth/auth.service';
import { ProfilInfoComponent } from '../../components/profil-info/profil-info.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { FriendsService } from '../../services/friends/friends.service';
import { MyPostsComponent } from '../../container/profil/my-posts/my-posts.component';

@Component({
    selector: 'app-profil-page',
    standalone: true,
    imports: [ProfilInfoComponent, NgSwitch, NgSwitchCase, MyPostsComponent],
    templateUrl: './profil-page.component.html',
    styleUrl: './profil-page.component.css',
})
export class ProfilPageComponent implements OnInit {
    profilPic: string | undefined = undefined;
    nbrFriends: number = 0;

    activeTab: string = 'posts';

    setActiveTab(tab: string) {
        this.activeTab = tab;
    }

    constructor(
        private profilService: ProfilService,
        private friendsService: FriendsService,
        private authServices: AuthService,
    ) {
        const user = JSON.parse(localStorage.getItem('user') as string);
        if (!this.authServices.user?.access_token) {
            this.authServices.logout();
            return;
        }
        if (this.authServices.user?.avatar) {
            this.profilPic = user.avatar.url;
        }
    }

    ngOnInit(): void {
        this.profilService.getMe().subscribe({
            next: (user: any) => {
                user.access_token = this.authServices.user?.access_token;
                this.authServices.user = user;
                localStorage.setItem('user', JSON.stringify(user));
                if (this.authServices.user?.avatar) {
                    this.profilPic = user.avatar.url;
                }
            },
        });

        this.friendsService.getFriends().subscribe({
            next: (friends) => {
                this.nbrFriends = friends.data.length;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }
}
