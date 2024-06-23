import { MetaModel } from '../meta.model';
import { CityModel } from '../city.model';

export class CitiesSearchResponse {
    data: CityModel[] = [];
    meta: MetaModel = new MetaModel();
}
