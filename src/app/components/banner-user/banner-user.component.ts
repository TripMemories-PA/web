import { Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-banner-user',
    standalone: true,
    imports: [NgOptimizedImage, NgIf],
    templateUrl: './banner-user.component.html',
    styleUrl: './banner-user.component.css',
})
export class BannerUserComponent {
    @Input() banner?: string | null;
}
