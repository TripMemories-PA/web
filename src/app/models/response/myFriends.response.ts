import { MetaModel } from '../meta.model';
import { User } from '../user';

export class MyFriendsResponse {
    data: User[] = [];
    meta: MetaModel = new MetaModel();
}
