interface IAvatar {
    url?: string;
}

export class User {
    id?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    password?: string;
    access_token?: string;
    avatar?: IAvatar;
    friends?: any[];
}

export class UserRegister {
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
}
