import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgOptimizedImage } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { SharedModule } from 'primeng/api';
import { Router } from '@angular/router';
import { PoiModel } from '../../models/Poi.model';

@Component({
    selector: 'app-monument-card-feed',
    standalone: true,
    imports: [CardModule, NgOptimizedImage, RatingModule, SharedModule],
    templateUrl: './monument-card-feed.component.html',
    styleUrl: './monument-card-feed.component.css',
})
export class MonumentCardFeedComponent {
    constructor(private router: Router) {}
    @Input() city?: string = '';
    @Input() monument?: PoiModel = new PoiModel();

    @Input() value: number = 3;

    goToPoi() {
        if (!this.monument) {
            return;
        }
        this.router.navigate([`/poi/${this.monument.id}`]);
    }
}
