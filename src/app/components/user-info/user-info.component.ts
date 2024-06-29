import { Component, Input } from '@angular/core';
import { ChangeProfilPicComponent } from '../change-profil-pic/change-profil-pic.component';
import { MyInformationsComponent } from '../my-informations/my-informations.component';
import { ProfilPicUserComponent } from '../profil-pic-user/profil-pic-user.component';
import { InformationUserComponent } from '../information-user/information-user.component';
import { User } from '../../models/user';

@Component({
    selector: 'app-user-info',
    standalone: true,
    imports: [
        ChangeProfilPicComponent,
        MyInformationsComponent,
        ProfilPicUserComponent,
        InformationUserComponent,
    ],
    templateUrl: './user-info.component.html',
    styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
    @Input() profilPic: string | undefined = undefined;
    @Input() nbrFriends: number = 0;
    @Input() nbrMonuments?: number = 0;
    @Input() user: User = new User();
}
