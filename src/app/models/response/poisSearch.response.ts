import { MetaModel } from '../meta.model';
import { PoiModel } from '../Poi.model';

export class PoisSearchResponse {
    data: PoiModel[] = [];
    meta: MetaModel = new MetaModel();
}
