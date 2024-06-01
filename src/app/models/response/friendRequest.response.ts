import { FriendRequestInfoModel } from '../friendRequestInfo.model';

export class FriendRequestResponse {
    data: FriendRequestInfoModel[] = [];
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
