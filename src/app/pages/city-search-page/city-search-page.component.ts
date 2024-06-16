import { Component, OnInit } from '@angular/core';
import { PoisService } from '../../services/pois/pois.service';
import { PoisSearchResponse } from '../../models/response/poisSearch.response';
import { PoiModel } from '../../models/Poi.model';
import { CityCardComponent } from '../../components/city-card/city-card.component';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

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
    constructor(private poisService: PoisService) {}

    searchCity = {
        city: '',
    };

    error: string = '';
    loading: boolean = false;

    pois: PoiModel[] = [];
    groupedByCity: { [city: string]: PoiModel[] } = {};
    citesNames: string[] = [];
    originalCitesNames: string[] = [];

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
                response.data.forEach((item) => {
                    if (!this.groupedByCity[item.city as string]) {
                        this.groupedByCity[item.city as string] = [];
                    }
                    this.groupedByCity[item.city as string].push(item);
                });
                this.citesNames = Object.keys(this.groupedByCity);
                this.originalCitesNames = [...this.citesNames]; // Stocker la liste complète des villes
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

    sortSearch() {
        if (this.searchCity.city === '') {
            this.citesNames = [...this.originalCitesNames];
            return;
        }
        this.loading = true;
        const searchTerm = this.searchCity.city.toLowerCase();
        this.citesNames = this.originalCitesNames.filter((city) =>
            city.toLowerCase().includes(searchTerm),
        );
        this.currentPage = 0;
        this.loading = false;
    }
}
