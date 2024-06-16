import { MetaModel } from '../meta.model';
import { PoiModel } from '../Poi.model';
import { PostModel } from '../post.model';

export class PoisSearchResponse {
    data: PoiModel[] = [];
    meta: MetaModel = new MetaModel();
}

export class PoisPostResponse {
    data: PostModel[] = [];
    meta: MetaModel = new MetaModel();
}
