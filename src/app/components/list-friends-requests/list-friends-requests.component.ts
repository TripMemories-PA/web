import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FriendsRequestsService } from '../../services/friends-requests/friends-requests.service';
import { FriendRequestResponse } from '../../models/response/friendRequest.response';
import { FriendRequestInfoModel } from '../../models/friendRequestInfo.model';
import { FriendRequestCardComponent } from '../friend-request-card/friend-request-card.component';

@Component({
    selector: 'app-list-friends-requests',
    standalone: true,
    imports: [FriendRequestCardComponent, NgForOf],
    templateUrl: './list-friends-requests.component.html',
    styleUrl: './list-friends-requests.component.css',
})
export class ListFriendsRequestsComponent implements OnInit {
    friends: FriendRequestInfoModel[] = [];

    constructor(private friendsRequestService: FriendsRequestsService) {}

    ngOnInit(): void {
        this.friendsRequestService.getFriendsRequests().subscribe({
            next: (friends: FriendRequestResponse) => {
                this.friends = friends.data;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }

    getFriendsRequests() {
        this.friendsRequestService.getFriendsRequests().subscribe({
            next: (friends: FriendRequestResponse) => {
                this.friends = friends.data;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }
}
