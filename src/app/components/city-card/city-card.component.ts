import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { PoiModel } from '../../models/Poi.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-city-card',
    standalone: true,
    imports: [CardModule, RatingModule, FormsModule, NgOptimizedImage],
    templateUrl: './city-card.component.html',
    styleUrl: './city-card.component.css',
})
export class CityCardComponent {
    @Input() city: string = '';
    @Input() monument: PoiModel = new PoiModel();

    value: number = 3;
}
