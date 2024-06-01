import { User } from './user';

export class FriendRequestInfoModel {
    id?: number;
    senderId?: number;
    receiverId?: number;
    sender?: User;
    createdAt?: string;
    updatedAt?: string;
}
