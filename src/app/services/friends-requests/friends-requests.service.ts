import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const URL = environment.apiUrl + '/me/friend-requests';

@Injectable({
    providedIn: 'root',
})
export class FriendsRequestsService {
    constructor(private http: HttpClient) {}

    createFriendRequest(id: string) {
        return this.http.post(URL, { userId: id });
    }

    getFriendsRequests() {
        return this.http.get(URL);
    }

    acceptFriendRequest(id: number) {
        return this.http.put(`${URL}/${id}/accept`, {});
    }

    deleteFriendRequest(id: number) {
        return this.http.delete(`${URL}/${id}`);
    }
}
