import { Component } from '@angular/core';
import { User } from '../../models/user';
import { FriendsService } from '../../services/friends/friends.service';
import { NgForOf } from '@angular/common';
import { FriendCardComponent } from '../friend-card/friend-card.component';

@Component({
    selector: 'app-list-friends',
    standalone: true,
    imports: [NgForOf, FriendCardComponent],
    templateUrl: './list-friends.component.html',
    styleUrl: './list-friends.component.css',
})
export class ListFriendsComponent {
    constructor(private friendsService: FriendsService) {}

    friends: User[] = [];

    getFriends() {
        this.friendsService.getFriends().subscribe({
            next: (friends: any) => {
                this.friends = friends;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }
}
