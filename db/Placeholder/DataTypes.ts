export type Role = {
    RoleID: number;
    RoleName: string;
};

export type User = {
    UserID: number;
    Email: string;
    Username: string;
    Password: string;
    JoinDate: string;
    BirthDate: string;
    RoleID: number;
    ProfilePicture: string | null;
    ContantCredentials: string;
    Address: string;
    Notify: number;
};

export type Status = {
    StatusID: number;
    StatusName: string;
};

export type Tagmap = {
    TagID: number;
    Name: string;
    Description: string;
    IsMature: number;
};

export type Location = {
    LocationID: number;
    Location: string;
    Date: string;
    PhotoID: string;
    Description: string;
    StatusID: number;
    HunterID: number;
    TagID: number;
    latitude: number;
    longitude: number;
};

export type Vote = {
    LocationID: number;
    Date: string;
    ProVotes: number;
    AntiVotes: number;
    IsFinished: number;
    DateFinished: string | null;
    Description: string;
};