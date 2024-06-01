import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { environment } from '../../../environments/environment';

const URL = environment.apiUrl + '/me';

@Injectable({
    providedIn: 'root',
})
export class ProfilService {
    constructor(private http: HttpClient) {}

    uploadImage(file: File) {
        const formData: FormData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(URL + '/avatar', formData);
    }

    updateMe(user: User) {
        return this.http.put(`${URL}`, user);
    }

    getMe() {
        return this.http.get(`${URL}`);
    }

    deleteMe() {
        return this.http.delete(`${URL}`);
    }
}
