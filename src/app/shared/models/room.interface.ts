import { ProjectionQualityInterface } from "./projection-quality.interface";

export interface CreateRoomInterface {
    number: number;
    projectionQuality: ProjectionQualityInterface
}

export interface UpdateRoomInterface extends CreateRoomInterface {
    id: string;
}

export interface RoomInterface extends UpdateRoomInterface {
}