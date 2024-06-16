import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { PoiModel } from '../../models/Poi.model';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-city-card',
    standalone: true,
    imports: [CardModule, RatingModule, FormsModule, NgOptimizedImage],
    templateUrl: './city-card.component.html',
    styleUrl: './city-card.component.css',
})
export class CityCardComponent {
    constructor(
        private router: Router,
        private _activatedRoute: ActivatedRoute,
    ) {}

    @Input() city: string = '';
    @Input() monument: PoiModel = new PoiModel();

    value: number = 3;

    goToCity() {
        this.router.navigate([this.city], { relativeTo: this._activatedRoute });
    }
}
