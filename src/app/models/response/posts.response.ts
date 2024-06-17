import { PoiModel } from '../Poi.model';
import { MetaModel } from '../meta.model';

export class PostsResponse {
    data: PoiModel[] = [];
    meta: MetaModel = new MetaModel();
}
