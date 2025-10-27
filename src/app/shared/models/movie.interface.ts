export interface MovieCreateInterface {
    title: string;
    image_Url: string;
}

export interface MovieUpdateInterface extends MovieCreateInterface {
    id: string;
}

export interface MovieInterface extends MovieUpdateInterface {
}