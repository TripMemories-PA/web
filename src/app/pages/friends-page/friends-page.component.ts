import { Component } from '@angular/core';
import { AddFriendsComponent } from '../../components/add-friends/add-friends.component';

@Component({
    selector: 'app-friends-page',
    standalone: true,
    imports: [AddFriendsComponent],
    templateUrl: './friends-page.component.html',
    styleUrl: './friends-page.component.css',
})
export class FriendsPageComponent {}
