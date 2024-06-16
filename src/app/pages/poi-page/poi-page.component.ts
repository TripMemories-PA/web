import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PoisService } from '../../services/pois/pois.service';
import { PoiModel } from '../../models/Poi.model';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { PostModel } from '../../models/post.model';
import { PostCardComponent } from '../../components/post-card/post-card.component';

@Component({
    selector: 'app-poi-page',
    standalone: true,
    imports: [NgOptimizedImage, PostCardComponent, RouterLink, NgForOf],
    templateUrl: './poi-page.component.html',
    styleUrl: './poi-page.component.css',
})
export class PoiPageComponent implements OnInit {
    poi: PoiModel = new PoiModel();
    poiPosts: PostModel[] = [];

    constructor(
        private _activatedRoute: ActivatedRoute,
        private poisService: PoisService,
    ) {}
    ngOnInit(): void {
        this._activatedRoute.paramMap.subscribe((params) => {
            const param = params.get('id');
            this.getPoiDetails(param);
            this.getPoiPosts(param);
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

    getPoiPosts(id: string | null): void {
        if (!id) {
            return;
        }
        this.poisService.getPoiPosts(id, '5').subscribe({
            next: (response) => {
                this.poiPosts = response.data;
                console.log(this.poiPosts[0]);
            },
            error: (error) => {
                console.error(error);
            },
        });
    }
}
