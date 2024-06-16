import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoisService } from '../../services/pois/pois.service';
import { PoiModel } from '../../models/Poi.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-poi-page',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './poi-page.component.html',
    styleUrl: './poi-page.component.css',
})
export class PoiPageComponent implements OnInit {
    poi: PoiModel = new PoiModel();

    constructor(
        private _activatedRoute: ActivatedRoute,
        private poisService: PoisService,
    ) {}
    ngOnInit(): void {
        this._activatedRoute.paramMap.subscribe((params) => {
            const param = params.get('id');
            this.getPoiDetails(param);
        });
    }

    getPoiDetails(id: string | null): void {
        if (!id) {
            return;
        }
        this.poisService.getPOI(id).subscribe({
            next: (response) => {
                this.poi = response;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }
}
