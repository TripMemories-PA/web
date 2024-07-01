import { IFileImage } from './interface/FileImage';

export class TicketModel {
    poiId: number;
    price: number;
    nbrPeople: number;
    stock: number;
    title: string;
    description: string;
    image: IFileImage;

    constructor(
        poiId: number,
        price: number,
        nbrPeople: number,
        stock: number,
        title: string,
        description: string,
        image: IFileImage,
    ) {
        this.poiId = poiId;
        this.price = price;
        this.nbrPeople = nbrPeople;
        this.stock = stock;
        this.title = title;
        this.description = description;
        this.image = image;
    }
}
