export type AddressData = {
    Address: string;
    ZipCode: string;
    Place: string;
    Municipality: string;
};

export type Position = {
    AddressData: AddressData;
};

export type MapPosition = {
    Positions: Position[];
};
