import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-picture-server',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './picture-server.component.html',
    styleUrl: './picture-server.component.css',
})
export class PictureServerComponent {
    constructor() {}
    @Input() pictureServerUrl: string = '';
}
