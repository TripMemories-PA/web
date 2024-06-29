import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { NgIf } from '@angular/common';
import { PictureServerComponent } from '../picture-server/picture-server.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
    selector: 'app-profil-pic-user',
    standalone: true,
    imports: [ButtonModule, InputIconModule, NgIf, PictureServerComponent, ProgressSpinnerModule],
    templateUrl: './profil-pic-user.component.html',
    styleUrl: './profil-pic-user.component.css',
})
export class ProfilPicUserComponent {
    @Input() profilPicOnServer: string | undefined = undefined;
}
