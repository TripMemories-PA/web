import { Component, Input } from '@angular/core';
import { AddFriendsComponent } from '../../../components/add-friends/add-friends.component';
import { ListFriendsComponent } from '../../../components/list-friends/list-friends.component';
import { ListFriendsRequestsComponent } from '../../../components/list-friends-requests/list-friends-requests.component';
import { ListFriendsUserComponent } from '../../../components/list-friends-user/list-friends-user.component';
import { User } from '../../../models/user';

@Component({
    selector: 'app-user-friends',
    standalone: true,
    imports: [
        AddFriendsComponent,
        ListFriendsComponent,
        ListFriendsRequestsComponent,
        ListFriendsUserComponent,
    ],
    templateUrl: './user-friends.component.html',
    styleUrl: './user-friends.component.css',
})
export class UserFriendsComponent {
    @Input() friends: User[] = [];
}
