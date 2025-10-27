export interface SeatCreatInterface {
    number: number;
    accessibleSeat: boolean;
    reserved: boolean;
}

export interface SeatUpdateInterface extends SeatCreatInterface {
    id: string;
}

export interface SeatInterface extends SeatUpdateInterface {}
