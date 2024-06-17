import { Component, OnInit } from '@angular/core';
import { CityCardComponent } from '../../components/city-card/city-card.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { PoisService } from '../../services/pois/pois.service';
import { ActivatedRoute } from '@angular/router';
import { PoiModel } from '../../models/Poi.model';
import { MonumentCardComponent } from '../../components/monument-card/monument-card.component';
import { MessageModule } from 'primeng/message';
import { PoisSearchResponse } from '../../models/response/pois.response';

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
        private poisService: PoisService,
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
    currentPage: number = 0;

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
        this.poisService.getPOIs().subscribe({
            next: (response: PoisSearchResponse) => {
                this.pois = response.data;
                this.getPois(response.meta.total.toString(), param);
            },
            error: (error) => {
                this.loading = false;
                this.error = error;
            },
        });
    }

    private getPois(total: string, param: string) {
        this.poisService.getPOIs(total).subscribe({
            next: (response: PoisSearchResponse) => {
                response.data.forEach((item) => {
                    if (!this.groupedByCity[item.city as string]) {
                        this.groupedByCity[item.city as string] = [];
                    }
                    this.groupedByCity[item.city as string].push(item);
                });
                this.citesNames = Object.keys(this.groupedByCity);
                const monuments = this.groupedByCity[param];
                /*                monuments.forEach((monument) => {
                    if (monument.name) this.monumentNames.push(monument.name);
                    this.monumentNames = monuments.map((monument) => {
                        return monument.name as string;
                    });
                });*/
                this.citesNames = Object.keys(this.groupedByCity);
                this.pois = this.groupedByCity[param] || [];
                this.originalPois = [...this.pois];
                this.updatePaginatedPois();
                this.loading = false;
            },
            error: (error) => {
                this.loading = false;
                this.error = error;
            },
        });
    }

    onPageChange(event: any) {
        this.currentPage = event.page;
        this.itemsPerPage = event.rows;
        this.updatePaginatedPois();
    }

    sortSearch() {
        if (this.searchMonument.monument === '') {
            this.pois = [...this.originalPois];
        } else {
            const searchTerm = this.searchMonument.monument.toLowerCase();
            this.pois = this.originalPois.filter((poi) => {
                return poi.name && poi.name.toLowerCase().includes(searchTerm);
            });
        }
        this.currentPage = 0;
        this.updatePaginatedPois();
    }

    updatePaginatedPois() {
        const start = this.currentPage * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        this.paginatedPois = this.pois.slice(start, end);
    }
}
