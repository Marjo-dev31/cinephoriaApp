export interface LoginCredantialInterface {
    mail: string;
    password: string;
}

export interface CurrentUserInterface {
    id: string;
    username: string;
    role: string;
    access_token: string
}
