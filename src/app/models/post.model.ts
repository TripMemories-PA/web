import { User } from './user';
import { IFileImage } from './interface/FileImage';

export class PostModel {
    id?: number;
    createdById?: number;
    poiId?: number;
    content?: string;
    note?: string;
    imageId?: number;
    createdAt?: Date;
    updatedAt?: Date;
    likesCount?: number;
    commentsCount?: number;
    isLiked?: boolean;
    image?: IFileImage;
    createdBy?: User;
}
