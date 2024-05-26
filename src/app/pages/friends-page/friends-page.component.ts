import { Component } from '@angular/core';
import { AddFriendsComponent } from '../../components/add-friends/add-friends.component';
import { ListFriendsComponent } from '../../components/list-friends/list-friends.component';

@Component({
    selector: 'app-friends-page',
    standalone: true,
    imports: [AddFriendsComponent, ListFriendsComponent],
    templateUrl: './friends-page.component.html',
    styleUrl: './friends-page.component.css',
})
export class FriendsPageComponent {}
