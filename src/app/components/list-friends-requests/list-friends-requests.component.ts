import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FriendsRequestsService } from '../../services/friends-requests/friends-requests.service';
import { FriendRequestResponse } from '../../models/response/friendRequest.response';
import { FriendRequestInfoModel } from '../../models/friendRequestInfo.model';
import { FriendRequestCardComponent } from '../friend-request-card/friend-request-card.component';
import { MetaModel } from '../../models/meta.model';
import { PaginatorModule } from 'primeng/paginator';

@Component({
    selector: 'app-list-friends-requests',
    standalone: true,
    imports: [FriendRequestCardComponent, NgForOf, PaginatorModule, NgIf],
    templateUrl: './list-friends-requests.component.html',
    styleUrl: './list-friends-requests.component.css',
})
export class ListFriendsRequestsComponent implements OnInit {
    friends: FriendRequestInfoModel[] = [];
    meta: MetaModel = new MetaModel();

    currentPage: number = 1;

    firstPage: number = 1;
    totalPages: number = 1;
    lastPage: number = 1;
    firstPageUrl: string = '';
    lastPageUrl: string = '';
    nextPageUrl: string | null = '';
    previousPageUrl: string | null = '';

    constructor(private friendsRequestService: FriendsRequestsService) {}

    ngOnInit(): void {
        this.getFriendsRequests();
    }

    getFriendsRequests() {
        this.friendsRequestService.getFriendsRequests().subscribe({
            next: (friends: FriendRequestResponse) => {
                this.friends = friends.data;
                this.meta = friends.meta;
                this.currentPage = friends.meta.currentPage;

                this.firstPage = friends.meta.firstPage;
                this.totalPages = friends.meta.total;
                this.lastPage = friends.meta.lastPage;
                this.firstPageUrl = friends.meta.firstPageUrl;
                this.lastPageUrl = friends.meta.lastPageUrl;
                this.nextPageUrl = friends.meta.nextPageUrl;
                this.previousPageUrl = friends.meta.previousPageUrl;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }

    onPageChange(event: any) {
        if (event.page < 0 || event.page > this.totalPages) {
            return;
        }
        if (event.page + 1 === this.currentPage) {
            return;
        }
        this.friendsRequestService.getFriendsRequests(event.page + 1, event.rows).subscribe({
            next: (friends: FriendRequestResponse) => {
                this.friends = friends.data;
                this.meta = friends.meta;
                this.currentPage = friends.meta.currentPage;
                this.firstPage = friends.meta.firstPage;
                this.totalPages = friends.meta.total;
                this.lastPage = friends.meta.lastPage;
                this.firstPageUrl = friends.meta.firstPageUrl;
                this.lastPageUrl = friends.meta.lastPageUrl;
                this.nextPageUrl = friends.meta.nextPageUrl;
                this.previousPageUrl = friends.meta.previousPageUrl;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }
}