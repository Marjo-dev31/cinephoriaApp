export interface CreateRoomInterface {
    number: number;
}

export interface UpdateRoomInterface extends CreateRoomInterface {
    id: string;
}

export interface RoomInterface extends UpdateRoomInterface {
}