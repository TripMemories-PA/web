import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UsersService } from '../../services/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { BannerProfilComponent } from '../../components/banner-profil/banner-profil.component';
import { MyFriendsComponent } from '../../container/profil/my-friends/my-friends.component';
import { MyPostsComponent } from '../../container/profil/my-posts/my-posts.component';
import { MyProfilComponent } from '../../container/profil/my-profil/my-profil.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { ProfilInfoComponent } from '../../components/profil-info/profil-info.component';
import { UserInfoComponent } from '../../components/user-info/user-info.component';
import { BannerUserComponent } from '../../components/banner-user/banner-user.component';

@Component({
    selector: 'app-user-page',
    standalone: true,
    imports: [
        BannerProfilComponent,
        MyFriendsComponent,
        MyPostsComponent,
        MyProfilComponent,
        NgSwitchCase,
        ProfilInfoComponent,
        NgSwitch,
        UserInfoComponent,
        BannerUserComponent,
    ],
    templateUrl: './user-page.component.html',
    styleUrl: './user-page.component.css',
})
export class UserPageComponent implements OnInit {
    constructor(
        private authServices: AuthService,
        private userServices: UsersService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
    ) {}

    user: User = new User();
    friends: User[] = [];
    lastPosts: any[] = [];
    profilPic: string | undefined = undefined;
    nbrFriends: number = 0;
    nbrMonuments?: number = 0;
    banner: string | undefined | null = undefined;
    activeTab: string = 'posts';

    ngOnInit(): void {
        const id = this._activatedRoute.snapshot.paramMap.get('id');
        if (!id) {
            this._router.navigate(['/']);
            return;
        }
        if (this.authServices.user?.id == id) {
            this._router.navigate(['/profil']);
            return;
        }
        this.userServices
            .getUser(id, this.authServices.user?.access_token !== undefined)
            .subscribe({
                next: (user) => {
                    this.user = user;
                    this.nbrMonuments = user.poisCount;
                    this.banner = user.banner?.url;
                    this.profilPic = user.avatar?.url;
                },
                error: (error) => {
                    console.error(error);
                },
            });

        this.userServices.getUserPosts(id).subscribe({
            next: (posts) => {
                this.lastPosts = posts.data;
            },
            error: (error) => {
                console.error(error);
            },
        });

        this.userServices.getUserFriends(id).subscribe({
            next: (friends) => {
                this.friends = friends.data;
                this.nbrFriends = friends.data.length;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }

    setActiveTab(tab: string) {
        this.activeTab = tab;
    }
}
