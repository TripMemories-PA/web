import { Component, OnInit } from '@angular/core';
import { CityCardComponent } from '../../components/city-card/city-card.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { ActivatedRoute } from '@angular/router';
import { PoiModel } from '../../models/Poi.model';
import { MonumentCardComponent } from '../../components/monument-card/monument-card.component';
import { MessageModule } from 'primeng/message';
import { PoisSearchResponse } from '../../models/response/pois.response';
import { CityService } from '../../services/city/city.service';
import { MetaModel } from '../../models/meta.model';

@Component({
    selector: 'app-monument-search-page',
    standalone: true,
    imports: [
        CityCardComponent,
        FormsModule,
        InputTextModule,
        NgForOf,
        NgIf,
        NgOptimizedImage,
        PaginatorModule,
        ProgressBarModule,
        MonumentCardComponent,
        MessageModule,
    ],
    templateUrl: './monument-search-page.component.html',
    styleUrl: './monument-search-page.component.css',
})
export class MonumentSearchPageComponent implements OnInit {
    constructor(
        private poisService: CityService,
        private _activatedRoute: ActivatedRoute,
    ) {}

    searchMonument = {
        monument: '',
    };

    error: string = '';
    loading: boolean = false;

    pois: PoiModel[] = [];
    paginatedPois: PoiModel[] = [];
    groupedByCity: { [city: string]: PoiModel[] } = {};
    citesNames: string[] = [];
    cityName: string = '';
    originalPois: PoiModel[] = [];

    itemsPerPage: number = 12;

    meta: MetaModel = new MetaModel();

    currentPage: number = 1;

    firstPage: number = 1;
    totalPages: number = 1;
    lastPage: number = 1;
    firstPageUrl: string = '';
    lastPageUrl: string = '';
    nextPageUrl: string | null = '';
    previousPageUrl: string | null = '';

    ngOnInit(): void {
        this._activatedRoute.paramMap.subscribe((params) => {
            const param = params.get('searchTerm');
            this.cityName = param as string;
            this.getCities(param);
        });
    }

    private getCities(param: string | null) {
        if (!param) {
            return;
        }
        this.loading = true;
        this.poisService.getCitiesPoi(param, 1, '12').subscribe({
            next: (response: PoisSearchResponse) => {
                this.loading = false;
                this.pois = response.data;
                this.meta = response.meta;
                this.currentPage = response.meta.currentPage;
                this.firstPage = response.meta.firstPage;
                this.totalPages = response.meta.total;
                this.lastPage = response.meta.lastPage;
                this.firstPageUrl = response.meta.firstPageUrl;
                this.lastPageUrl = response.meta.lastPageUrl;
                this.nextPageUrl = response.meta.nextPageUrl;
                this.previousPageUrl = response.meta.previousPageUrl;
            },
            error: (error) => {
                this.loading = false;
                this.error = error;
            },
        });
    }

    onPageChange(event: any) {
        if (event.page < 0 || event.page > this.totalPages) {
            return;
        }
        if (event.page + 1 === this.currentPage) {
            return;
        }
        this.poisService
            .getCitiesPoi(this.cityName, event.page + 1, this.itemsPerPage.toString())
            .subscribe({
                next: (response) => {
                    this.pois = response.data;
                    this.meta = response.meta;
                    this.currentPage = response.meta.currentPage;
                    this.firstPage = response.meta.firstPage;
                    this.totalPages = response.meta.total;
                    this.lastPage = response.meta.lastPage;
                    this.firstPageUrl = response.meta.firstPageUrl;
                    this.lastPageUrl = response.meta.lastPageUrl;
                    this.nextPageUrl = response.meta.nextPageUrl;
                    this.previousPageUrl = response.meta.previousPageUrl;
                },
                error: (error) => {
                    console.error(error);
                },
            });
    }

    sortSearch() {
        if (this.searchMonument.monument === '') {
        } else {
        }
    }
}
