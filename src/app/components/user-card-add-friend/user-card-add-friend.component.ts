import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { FriendsRequestsService } from '../../services/friends-requests/friends-requests.service';
import { MessageModule } from 'primeng/message';
import { NgIf } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
    selector: 'app-user-card-add-friend',
    standalone: true,
    imports: [CardModule, AvatarModule, ButtonModule, MessageModule, NgIf, ProgressBarModule],
    templateUrl: './user-card-add-friend.component.html',
    styleUrl: './user-card-add-friend.component.css',
})
export class UserCardAddFriendComponent {
    constructor(
        private router: Router,
        private friendRequestsService: FriendsRequestsService,
    ) {}

    isLoading: boolean = false;

    message: string = '';
    error: string = '';

    @Input() user: User | undefined;

    addFriend() {
        if (this.isLoading || !this.user) {
            return;
        }
        this.isLoading = true;

        this.friendRequestsService.createFriendRequest(this.user.id!).subscribe({
            next: () => {
                this.isLoading = false;
                this.message = 'Friend request sent';
            },
            error: (error: Error) => {
                this.isLoading = false;
                this.error = error.message;
            },
        });
    }

    viewProfile() {
        if (this.user === undefined) {
            return;
        }
        this.router.navigate(['/profile', this.user.id]);
    }
}
