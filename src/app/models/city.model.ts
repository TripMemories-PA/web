import { IFileImage } from './interface/FileImage';

export class CityModel {
    id?: number;
    name?: string;
    zipCode?: string;
    coverId?: number;
    createdAt?: Date;
    updatedAt?: Date;
    cover?: IFileImage;
}
