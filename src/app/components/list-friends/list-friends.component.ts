import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FriendsService } from '../../services/friends/friends.service';
import { NgForOf, NgIf } from '@angular/common';
import { FriendCardComponent } from '../friend-card/friend-card.component';
import { MyFriendsResponse } from '../../models/response/myFriends.response';
import { MetaModel } from '../../models/meta.model';
import { PaginatorModule } from 'primeng/paginator';

@Component({
    selector: 'app-list-friends',
    standalone: true,
    imports: [NgForOf, FriendCardComponent, NgIf, PaginatorModule],
    templateUrl: './list-friends.component.html',
    styleUrl: './list-friends.component.css',
})
export class ListFriendsComponent implements OnInit {
    constructor(private friendsService: FriendsService) {}

    friends: User[] = [];
    meta: MetaModel = new MetaModel();

    currentPage: number = 1;

    firstPage: number = 1;
    totalPages: number = 1;
    lastPage: number = 1;
    firstPageUrl: string = '';
    lastPageUrl: string = '';
    nextPageUrl: string | null = '';
    previousPageUrl: string | null = '';

    ngOnInit() {
        this.getFriends();
    }

    getFriends() {
        this.friendsService.getFriends().subscribe({
            next: (friends: MyFriendsResponse) => {
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
                console.log(friends.data);
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
        this.friendsService.getFriends(event.page + 1, event.rows).subscribe({
            next: (friends: MyFriendsResponse) => {
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
