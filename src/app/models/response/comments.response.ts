import { MetaModel } from '../meta.model';
import { CommentModel } from '../comment.model';

export class CommentsResponse {
    data: CommentModel[] = [];
    meta: MetaModel = new MetaModel();
}
