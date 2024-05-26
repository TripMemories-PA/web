import { User } from '../user';

export class SearchUsersResponse {
    data: User[] = [];
    meta?: {
        total: number;
        currentPage: number;
        perPage: number;
        lastPage: number;
        lastPageUrl: string;
        nextPageUrl: string;
        firstPageUrl: string;
        previousPageUrl: string;
    };
}
