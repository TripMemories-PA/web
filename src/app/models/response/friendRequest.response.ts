import { FriendRequestInfoModel } from '../friendRequestInfo.model';
import { MetaModel } from '../meta.model';

export class FriendRequestResponse {
    data: FriendRequestInfoModel[] = [];
    meta: MetaModel = new MetaModel();
}
