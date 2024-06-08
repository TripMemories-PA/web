import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SearchUsersResponse } from '../../models/response/searchUsers.response';

const URL = environment.apiUrl + '/users';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private http: HttpClient) {}

    search(search: string) {
        const params = new URLSearchParams();
        params.append('page', '1');
        params.append('perPage', '10');
        params.append('search', search);
        return this.http.get<SearchUsersResponse>(`${URL}?${params.toString()}`);
    }
}
