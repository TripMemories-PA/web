interface avatar {
    location?: string;
}

export class User {
    _id?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    password?: string;
    access_token?: string;
    avatar?: avatar;
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
