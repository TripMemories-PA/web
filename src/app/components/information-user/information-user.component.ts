import { Component, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { User } from '../../models/user';
import { ProfilService } from '../../services/profil/profil.service';
import { Router } from '@angular/router';
import { UpdateMeModel } from '../../models/updateme.model';
import { FriendsRequestsService } from '../../services/friends-requests/friends-requests.service';
import { FriendsService } from '../../services/friends/friends.service';

@Component({
    selector: 'app-information-user',
    standalone: true,
    imports: [
        ButtonModule,
        DialogModule,
        FormsModule,
        InputTextModule,
        NgIf,
        NgOptimizedImage,
        ProgressBarModule,
    ],
    templateUrl: './information-user.component.html',
    styleUrl: './information-user.component.css',
})
export class InformationUserComponent implements OnInit {
    ok: string | null = null;
    error: string | null = null;

    isLoading: boolean = false;

    visible: boolean = false;
    modifyAccount: boolean = false;
    userValues: User = {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
    };

    @Input() user?: User;
    @Input() nbrFriends?: number;
    @Input() nbrMonuments?: number;

    constructor(
        private profilServices: ProfilService,
        private friendsRequestService: FriendsRequestsService,
        private friendService: FriendsService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        if (this.user) {
            this.userValues = this.user;
        }
    }

    submit(): void {
        if (this.isLoading) return;
        this.error = null;
        this.isLoading = true;
        this.profilServices.updateMe(this.userValues).subscribe({
            next: (res: UpdateMeModel) => {
                this.isLoading = false;
                this.ok = 'Changement effectué avec succès';
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

    deleteFriend() {
        if (!this.user?.id) {
            return;
        }
        this.friendService.deleteFriend(this.user.id).subscribe({
            next: () => {
                this.router.navigate(['/']);
            },
            error: (err: any) => {
                this.error = err.message;
            },
        });
    }

    addFriend() {
        if (!this.user?.id) {
            return;
        }
        this.friendsRequestService.createFriendRequest(this.user.id).subscribe({
            next: () => {
                this.router.navigate(['/']);
            },
            error: (err: any) => {
                this.error = err.message;
            },
        });
    }
}
