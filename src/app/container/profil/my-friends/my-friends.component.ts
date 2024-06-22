import { Component } from '@angular/core';
import { AddFriendsComponent } from '../../../components/add-friends/add-friends.component';
import { ListFriendsRequestsComponent } from '../../../components/list-friends-requests/list-friends-requests.component';
import { FriendCardComponent } from '../../../components/friend-card/friend-card.component';
import { ListFriendsComponent } from '../../../components/list-friends/list-friends.component';

@Component({
    selector: 'app-my-friends',
    standalone: true,
    imports: [
        AddFriendsComponent,
        ListFriendsRequestsComponent,
        FriendCardComponent,
        ListFriendsComponent,
    ],
    templateUrl: './my-friends.component.html',
    styleUrl: './my-friends.component.css',
})
export class MyFriendsComponent {}
