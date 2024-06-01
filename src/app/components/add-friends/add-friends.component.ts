import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UserCardAddFriendComponent } from '../user-card-add-friend/user-card-add-friend.component';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { SearchUsersResponse } from '../../models/response/searchUsers.response';

@Component({
    selector: 'app-add-friends',
    standalone: true,
    imports: [
        DialogModule,
        InputTextModule,
        ButtonModule,
        UserCardAddFriendComponent,
        FormsModule,
        NgForOf,
    ],
    templateUrl: './add-friends.component.html',
    styleUrl: './add-friends.component.css',
})
export class AddFriendsComponent {
    constructor(private usersService: UsersService) {}

    users: User[] = [];

    showDialog: boolean = false;

    searchUser = {
        search: '',
    };

    openDialog() {
        this.showDialog = true;
    }

    searchUsers() {
        if (!this.searchUser.search) {
            return;
        }
        this.usersService.search(this.searchUser.search).subscribe({
            next: (searchUsersResponse: SearchUsersResponse) => {
                this.users = searchUsersResponse.data;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }
}
