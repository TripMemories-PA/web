import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FriendsRequestsService } from '../../services/friends-requests/friends-requests.service';
import { FriendRequestResponse } from '../../models/response/friendRequest.response';
import { FriendRequestInfoModel } from '../../models/friendRequestInfo.model';
import { FriendRequestCardComponent } from '../friend-request-card/friend-request-card.component';
import { MetaModel } from '../../models/meta.model';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-list-friends-requests',
    standalone: true,
    imports: [
        FriendRequestCardComponent,
        NgForOf,
        PaginatorModule,
        NgIf,
        ButtonModule,
        DialogModule,
    ],
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

    itemsPerPage: number = 10;
    showDialog: boolean = false;
    isLoading: boolean = false;

    constructor(private friendsRequestService: FriendsRequestsService) {}

    ngOnInit(): void {
        this.getFriendsRequests();
    }

    openDialog() {
        this.showDialog = true;
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
                this.itemsPerPage = friends.meta.perPage;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }

    onPageChange(event: any) {
        if (event.page < 0 || event.page > this.lastPage) {
            return;
        }
        if (event.page + 1 === this.currentPage && this.itemsPerPage === event.rows) {
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
                this.itemsPerPage = friends.meta.perPage;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }
}
