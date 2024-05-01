import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UserCardAddFriendComponent } from '../user-card-add-friend/user-card-add-friend.component';

@Component({
    selector: 'app-add-friends',
    standalone: true,
    imports: [DialogModule, InputTextModule, ButtonModule, UserCardAddFriendComponent],
    templateUrl: './add-friends.component.html',
    styleUrl: './add-friends.component.css',
})
export class AddFriendsComponent {
    showDialog: boolean = false;

    openDialog() {
        this.showDialog = true;
    }
}
