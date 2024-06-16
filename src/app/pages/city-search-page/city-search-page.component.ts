import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoisService } from '../../services/pois/pois.service';
import { PoisSearchResponse } from '../../models/response/poisSearch.response';
import { PoiModel } from '../../models/Poi.model';
import { CityCardComponent } from '../../components/city-card/city-card.component';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';

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
    ],
    templateUrl: './city-search-page.component.html',
    styleUrl: './city-search-page.component.css',
})
export class CitySearchPageComponent implements OnInit {
    constructor(
        private router: Router,
        private poisService: PoisService,
    ) {}

    error: string = '';
    loading: boolean = false;

    pois: PoiModel[] = [];
    groupedByCity: { [city: string]: PoiModel[] } = {};
    citesNames: string[] = [];

    itemsPerPage: number = 12;
    currentPage: number = 0;

    ngOnInit(): void {
        this.getCities();
    }

    private getCities() {
        this.loading = true;
        this.poisService.getPOIs().subscribe({
            next: (response: PoisSearchResponse) => {
                this.pois = response.data;
                this.getPois(response.meta.total.toString());
            },
            error: (error) => {
                this.loading = false;
                this.error = error;
            },
        });
    }

    private getPois(total: string) {
        this.poisService.getPOIs(total).subscribe({
            next: (response: PoisSearchResponse) => {
                let number = 0;
                response.data.forEach((item) => {
                    if (number < 10) {
                        if (!this.groupedByCity[item.city as string]) {
                            this.groupedByCity[item.city as string] = [];
                        }
                        this.groupedByCity[item.city as string].push(item);
                    }
                });
                Object.keys(this.groupedByCity).forEach((city) => {
                    if (!this.citesNames.includes(city)) {
                        this.citesNames.push(city);
                    }
                });
                this.loading = false;
            },
            error: (error) => {
                this.loading = false;
                this.error = error;
            },
        });
    }

    get paginatedCities(): string[] {
        const start = this.currentPage * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.citesNames.slice(start, end);
    }

    onPageChange(event: any) {
        this.currentPage = event.page;
        this.itemsPerPage = event.rows;
    }
}
