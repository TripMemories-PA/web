import { MetaModel } from '../meta.model';
import { PostModel } from '../post.model';

export class PostsResponse {
    data: PostModel[] = [];
    meta: MetaModel = new MetaModel();
}
