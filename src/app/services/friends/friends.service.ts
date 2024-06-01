import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const URL = environment.apiUrl + '/me/friends';

@Injectable({
    providedIn: 'root',
})
export class FriendsService {
    constructor(private http: HttpClient) {}

    getFriends() {
        return this.http.get(URL);
    }

    deleteFriend(id: number) {
        return this.http.delete(`${URL}/${id}`);
    }
}
