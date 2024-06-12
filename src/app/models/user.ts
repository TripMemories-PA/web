interface IFileImage {
    url?: string;
    filename?: string;
}

export class User {
    id?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    password?: string;
    access_token?: string;
    avatar?: IFileImage;
    banner?: IFileImage;
    friends?: any[];
    isFriend?: boolean;
    hasReceivedFriendRequest?: boolean;
    hasSentFriendRequest?: boolean;
}

export class UserRegister {
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
}
