import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpContext } from '@angular/common/http';
import { NO_AUTH } from '../request.interceptor';
import { PostsResponse } from '../../models/response/posts.response';
import { PostModel } from '../../models/post.model';

const URL = environment.apiUrl + '/posts';
const httpOptions = {
    context: new HttpContext().set(NO_AUTH, true),
};

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    constructor(private http: HttpClient) {}

    getPosts(perPage?: string) {
        const params = new URLSearchParams();
        params.append('page', '1');
        params.append('perPage', perPage ?? '10');
        return this.http.get<PostsResponse>(`${URL}?${params.toString()}`, httpOptions);
    }

    getPost(id: string, isConnected: boolean = false) {
        return this.http.get<PostModel>(`${URL}/${id}`, isConnected ? undefined : httpOptions);
    }

    likePost(id: number) {
        return this.http.post(`${URL}/${id}/like`, {});
    }

    deleteLikePost(id: number) {
        return this.http.delete(`${URL}/${id}/like`, {});
    }
}
