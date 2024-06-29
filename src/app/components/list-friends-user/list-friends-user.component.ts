import { Component, Input } from '@angular/core';
import { FriendCardComponent } from '../friend-card/friend-card.component';
import { NgForOf, NgIf } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { User } from '../../models/user';

@Component({
    selector: 'app-list-friends-user',
    standalone: true,
    imports: [FriendCardComponent, NgForOf, NgIf, PaginatorModule],
    templateUrl: './list-friends-user.component.html',
    styleUrl: './list-friends-user.component.css',
})
export class ListFriendsUserComponent {
    @Input() friends: User[] = [];
}
