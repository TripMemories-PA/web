import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { SharedModule } from 'primeng/api';
import { FriendRequestInfoModel } from '../../models/friendRequestInfo.model';
import { FriendsRequestsService } from '../../services/friends-requests/friends-requests.service';

@Component({
    selector: 'app-friend-request-card',
    standalone: true,
    imports: [
        AvatarModule,
        ButtonModule,
        CardModule,
        MessageModule,
        NgIf,
        ProgressBarModule,
        SharedModule,
        NgOptimizedImage,
    ],
    templateUrl: './friend-request-card.component.html',
    styleUrl: './friend-request-card.component.css',
})
export class FriendRequestCardComponent implements OnInit {
    @Input() friendRequest?: FriendRequestInfoModel;
    @Output() reload: EventEmitter<void> = new EventEmitter();
    isLoading: boolean = false;

    message: string = '';
    error: string = '';
    receivedDate: string = '';

    constructor(private friendsRequestService: FriendsRequestsService) {}

    ngOnInit(): void {
        console.log(this.friendRequest);
        if (this.friendRequest?.createdAt) {
            const date = new Date(this.friendRequest.createdAt);
            this.receivedDate = date.toLocaleDateString('fr-FR');
            console.log(this.receivedDate);
        }
    }

    acceptFriendRequest(id: number | undefined) {
        if (!id) {
            return;
        }
        this.friendsRequestService.acceptFriendRequest(id).subscribe({
            next: () => {
                this.message = "Demande d'amitié acceptée";
                setTimeout(() => {
                    this.reload.emit();
                }, 5000);
            },
            error: (err) => {
                this.error = err.error.message;
            },
        });
    }

    declineFriendRequest(id: number | undefined) {
        if (!id) {
            return;
        }
        this.friendsRequestService.deleteFriendRequest(id).subscribe({
            next: () => {
                this.message = "Demande d'amitié refusée";
                setTimeout(() => {
                    this.reload.emit();
                }, 5000);
            },
            error: (err) => {
                this.error = err.error.message;
            },
        });
    }
}
