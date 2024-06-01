import { Component } from '@angular/core';
import { AddFriendsComponent } from '../../components/add-friends/add-friends.component';
import { ListFriendsComponent } from '../../components/list-friends/list-friends.component';
import { ListFriendsRequestsComponent } from '../../components/list-friends-requests/list-friends-requests.component';

@Component({
    selector: 'app-friends-page',
    standalone: true,
    imports: [AddFriendsComponent, ListFriendsComponent, ListFriendsRequestsComponent],
    templateUrl: './friends-page.component.html',
    styleUrl: './friends-page.component.css',
})
export class FriendsPageComponent {}
