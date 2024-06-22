import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { SharedModule } from 'primeng/api';
import { User } from '../../models/user';
import { FriendsService } from '../../services/friends/friends.service';
import { DialogModule } from 'primeng/dialog';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
    selector: 'app-friend-card',
    standalone: true,
    imports: [
        AvatarModule,
        ButtonModule,
        CardModule,
        MessageModule,
        NgIf,
        ProgressBarModule,
        SharedModule,
        DialogModule,
        NgOptimizedImage,
        StyleClassModule,
    ],
    templateUrl: './friend-card.component.html',
    styleUrl: './friend-card.component.css',
})
export class FriendCardComponent {
    @Input() user: User | undefined;
    @Output() reload: EventEmitter<any> = new EventEmitter();

    constructor(private friendsService: FriendsService) {}

    isLoading: boolean = false;

    message: string = '';
    error: string = '';

    visible: boolean = false;

    deleteFriend(friendId: string | undefined) {
        this.isLoading = true;
        if (!friendId) {
            this.isLoading = false;
            return;
        }
        this.friendsService.deleteFriend(friendId).subscribe({
            next: (_) => {
                this.isLoading = false;
                this.reload.emit();
            },
            error: (err) => {
                this.isLoading = false;
                console.error(err);
            },
        });
    }
}
