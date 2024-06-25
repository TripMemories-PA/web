import { Component, OnInit } from '@angular/core';
import { PoisService } from '../../services/pois/pois.service';
import { PoiModel } from '../../models/Poi.model';
import { CityCardComponent } from '../../components/city-card/city-card.component';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { CityService } from '../../services/city/city.service';
import { CityModel } from '../../models/city.model';
import { MetaModel } from '../../models/meta.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-city-search-page',
    standalone: true,
    imports: [
        CityCardComponent,
        NgForOf,
        NgOptimizedImage,
        PaginatorModule,
        NgIf,
        ProgressBarModule,
        InputTextModule,
        MessageModule,
    ],
    templateUrl: './city-search-page.component.html',
    styleUrl: './city-search-page.component.css',
})
export class CitySearchPageComponent implements OnInit {
    constructor(
        private _activatedRoute: ActivatedRoute,
        private cityService: CityService,
    ) {}

    searchCity = {
        city: '',
    };

    error: string = '';
    loading: boolean = false;

    pois: PoiModel[] = [];
    cities: CityModel[] = [];
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
        this._activatedRoute.queryParamMap.subscribe((params) => {
            const param = params.get('search');
            if (param) {
                this.searchCity.city = param;
                this.sortSearch();
            } else {
                this.getCities();
            }
        });
    }

    private getCities() {
        this.loading = true;
        this.cityService.getCities(1, '12').subscribe({
            next: (response) => {
                this.loading = false;
                this.cities = response.data;
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
        if (event.rows === this.itemsPerPage && event.page + 1 === this.currentPage) {
            return;
        }
        this.cityService.getCities(event.page + 1, event.rows, this.searchCity.city).subscribe({
            next: (response) => {
                this.cities = response.data;
                this.meta = response.meta;
                this.currentPage = response.meta.currentPage;
                this.firstPage = response.meta.firstPage;
                this.totalPages = response.meta.total;
                this.lastPage = response.meta.lastPage;
                this.firstPageUrl = response.meta.firstPageUrl;
                this.lastPageUrl = response.meta.lastPageUrl;
                this.nextPageUrl = response.meta.nextPageUrl;
                this.previousPageUrl = response.meta.previousPageUrl;
                this.itemsPerPage = response.meta.perPage;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }

    sortSearch() {
        if (this.searchCity.city === '') {
            this.cityService.getCities(1, '12').subscribe({
                next: (response) => {
                    this.loading = false;
                    this.cities = response.data;
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
                    console.error(error);
                },
            });
            return;
        }
        this.loading = true;
        this.cityService.getCities(1, '12', this.searchCity.city).subscribe({
            next: (response) => {
                this.loading = false;
                this.cities = response.data;
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
                console.error(error);
            },
        });
    }
}
