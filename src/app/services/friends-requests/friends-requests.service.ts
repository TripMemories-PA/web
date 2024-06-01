import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FriendRequestResponse } from '../../models/response/friendRequest.response';

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
        const params = new URLSearchParams();
        params.append('page', '1');
        params.append('perPage', '10');
        return this.http.get<FriendRequestResponse>(`${URL}?${params.toString()}`);
    }

    acceptFriendRequest(id: number) {
        return this.http.put(`${URL}/${id}/accept`, {});
    }

    deleteFriendRequest(id: number) {
        return this.http.delete(`${URL}/${id}`);
    }
}
