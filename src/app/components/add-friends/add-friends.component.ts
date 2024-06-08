import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UserCardAddFriendComponent } from '../user-card-add-friend/user-card-add-friend.component';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { SearchUsersResponse } from '../../models/response/searchUsers.response';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessageModule } from 'primeng/message';

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
        NgIf,
        ProgressBarModule,
        MessageModule,
    ],
    templateUrl: './add-friends.component.html',
    styleUrl: './add-friends.component.css',
})
export class AddFriendsComponent {
    constructor(private usersService: UsersService) {}

    users: User[] = [];
    isEmptySearch: boolean = false;
    showDialog: boolean = false;
    isLoading: boolean = false;

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
        this.isLoading = true;
        this.isEmptySearch = false;
        this.usersService.search(this.searchUser.search).subscribe({
            next: (searchUsersResponse: SearchUsersResponse) => {
                this.isLoading = false;
                this.users = searchUsersResponse.data.filter((user) => {
                    return user.isFriend === false && user.isReceivedFriendRequest === false;
                });
                if (this.users.length === 0) {
                    this.isEmptySearch = true;
                }
            },
            error: (error) => {
                this.isLoading = false;
                console.error(error);
            },
        });
    }
}
