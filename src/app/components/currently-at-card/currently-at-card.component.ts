import { Component, input, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-currently-at-card',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './currently-at-card.component.html',
    styleUrl: './currently-at-card.component.css',
})
export class CurrentlyAtCardComponent {
    @Input() title?: string = '';
    @Input() image?: string;
    @Input() description?: string = '';
    @Input() infoPlus?: string = '';
}
