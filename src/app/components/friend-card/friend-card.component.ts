import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { NgIf } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { SharedModule } from 'primeng/api';
import { User } from '../../models/user';

@Component({
    selector: 'app-friend-card',
    standalone: true,
    imports: [
        AvatarModule,
        ButtonModule,
        CardModule,
        MessageModule,
        NgIf,
        ProgressBarModule,
        SharedModule,
    ],
    templateUrl: './friend-card.component.html',
    styleUrl: './friend-card.component.css',
})
export class FriendCardComponent {
    @Input() user: User | undefined;

    isLoading: boolean = false;

    message: string = '';
    error: string = '';
}
