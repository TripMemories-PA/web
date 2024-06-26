import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpContext } from '@angular/common/http';
import { NO_AUTH } from '../request.interceptor';
import { PoiModel } from '../../models/Poi.model';
import { PoisPostResponse, PoisSearchResponse } from '../../models/response/pois.response';

const URL = environment.apiUrl + '/pois';
const httpOptions = {
    context: new HttpContext().set(NO_AUTH, true),
};
@Injectable({
    providedIn: 'root',
})
export class PoisService {
    constructor(private http: HttpClient) {}

    getPOIs(perPage?: string, swLat?: string, swLng?: string, radius?: string) {
        const params = new URLSearchParams();
        params.append('page', '1');
        params.append('perPage', perPage ?? '10');
        if (swLat) {
            params.append('lat', swLat.toString());
        }
        if (swLng) {
            params.append('lng', swLng.toString());
        }
        if (radius) {
            params.append('radius', radius.toString());
        }
        return this.http.get<PoisSearchResponse>(`${URL}?${params.toString()}`, httpOptions);
    }

    getPOI(id: string) {
        return this.http.get<PoiModel>(`${URL}/${id}`, httpOptions);
    }

    getPoiPosts(id: string, perPage?: string) {
        const params = new URLSearchParams();
        params.append('page', '1');
        params.append('perPage', perPage ?? '10');
        return this.http.get<PoisPostResponse>(
            `${URL}/${id}/posts?${params.toString()}`,
            httpOptions,
        );
    }
}
