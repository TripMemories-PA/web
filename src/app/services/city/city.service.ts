import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpContext } from '@angular/common/http';
import { NO_AUTH } from '../request.interceptor';
import { PoisSearchResponse } from '../../models/response/pois.response';
import { CitiesSearchResponse } from '../../models/response/cities.response';

const URL = environment.apiUrl + '/cities';
const httpOptions = {
    context: new HttpContext().set(NO_AUTH, true),
};

@Injectable({
    providedIn: 'root',
})
export class CityService {
    constructor(private http: HttpClient) {}

    getCities(page: number = 1, perPage?: string, search?: string) {
        const params = new URLSearchParams();
        params.append('page', page.toString());
        params.append('perPage', perPage ?? '10');
        if (search) {
            params.append('search', search);
        }
        return this.http.get<CitiesSearchResponse>(`${URL}?${params.toString()}`, httpOptions);
    }

    getCitiesPoi(
        id: string,
        page: number = 1,
        perPage?: string,
        sort: boolean = false,
        order: 'asc' | 'desc' = 'asc',
    ) {
        const params = new URLSearchParams();
        params.append('page', page.toString());
        params.append('perPage', perPage ?? '10');
        if (sort) {
            params.append('sortBy', 'name');
            params.append('order', order);
        }
        return this.http.get<PoisSearchResponse>(
            `${URL}/${id}/pois?${params.toString()}`,
            httpOptions,
        );
    }
}
