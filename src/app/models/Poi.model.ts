import { IFileImage } from './interface/FileImage';
import { TypeMonument } from './interface/TypeMonument';
import { CityModel } from './city.model';

export class PoiModel {
    id?: number;
    name?: string;
    description?: string;
    coverId?: number;
    typeId?: number;
    city?: CityModel;
    zipCode?: string;
    address?: string;
    latitude?: string;
    longitude?: string;
    cover?: IFileImage;
    type?: TypeMonument;
    createdAt?: Date;
    updatedAt?: Date;
}
