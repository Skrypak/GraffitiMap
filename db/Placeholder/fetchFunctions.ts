import { User, Location } from "./DataTypes";

const users = [{
    "UserID": 1,
    "Email": "john.doe@example.com",
    "Username": "john_doe",
    "Password": "password123",
    "JoinDate": "2022-01-15",
    "BirthDate": "1990-05-10",
    "RoleID": 1,
    "ProfilePicture": null,
    "ContantCredentials": "Certified Professional",
    "Address": "123 Main St",
    "Notify": 1
},
{
    "UserID": 2,
    "Email": "jane.smith@example.com",
    "Username": "jane_smith",
    "Password": "password456",
    "JoinDate": "2021-11-10",
    "BirthDate": "1985-07-22",
    "RoleID": 2,
    "ProfilePicture": null,
    "ContantCredentials": "Freelance Developer",
    "Address": "456 Oak St",
    "Notify": 1
},
{
    "UserID": 3,
    "Email": "mike.jones@example.com",
    "Username": "mike_jones",
    "Password": "password789",
    "JoinDate": "2023-04-18",
    "BirthDate": "1992-03-18",
    "RoleID": 2,
    "ProfilePicture": null,
    "ContantCredentials": "Data Scientist",
    "Address": "789 Pine St",
    "Notify": 0
},
{
    "UserID": 4,
    "Email": "anna.lee@example.com",
    "Username": "anna_lee",
    "Password": "passwordabc",
    "JoinDate": "2020-06-25",
    "BirthDate": "1995-09-30",
    "RoleID": 3,
    "ProfilePicture": null,
    "ContantCredentials": "Project Manager",
    "Address": "321 Elm St",
    "Notify": 1
},
{
    "UserID": 5,
    "Email": "robert.king@example.com",
    "Username": "robert_king",
    "Password": "passwordxyz",
    "JoinDate": "2022-08-30",
    "BirthDate": "1988-12-15",
    "RoleID": 1,
    "ProfilePicture": null,
    "ContantCredentials": "Software Engineer",
    "Address": "987 Cedar St",
    "Notify": 0
}];

const locations =[
    {
        "LocationID": 1,
        "Location": "Grand Canyon",
        "Date": "2023-05-15",
        "PhotoID": "1,2,3",
        "Description": "A beautiful natural wonder.",
        "StatusID": 1,
        "HunterID": 1,
        "TagID": 1,
        "latitude": 36.1069,
        "longitude": -112.1129
    },
    {
        "LocationID": 2,
        "Location": "Eiffel Tower",
        "Date": "2022-12-25",
        "PhotoID": "4,5",
        "Description": "Famous landmark in Paris.",
        "StatusID": 2,
        "HunterID": 2,
        "TagID": 2,
        "latitude": 48.8584,
        "longitude": 2.2945
    },
    {
        "LocationID": 3,
        "Location": "Great Wall of China",
        "Date": "2023-07-18",
        "PhotoID": "6,7",
        "Description": "An ancient marvel of construction.",
        "StatusID": 3,
        "HunterID": 3,
        "TagID": 3,
        "latitude": 40.4319,
        "longitude": 116.5704
    },
    {
        "LocationID": 4,
        "Location": "Mt. Everest",
        "Date": "2021-09-05",
        "PhotoID": "8,9",
        "Description": "The highest mountain in the world.",
        "StatusID": 4,
        "HunterID": 4,
        "TagID": 4,
        "latitude": 27.9881,
        "longitude": 86.9250
    },
    {
        "LocationID": 5,
        "Location": "Area 51",
        "Date": "2022-10-31",
        "PhotoID": "10",
        "Description": "Highly restricted military area.",
        "StatusID": 2,
        "HunterID": 5,
        "TagID": 5,
        "latitude": 37.2484,
        "longitude": -115.8001
    }
]

export function fetchUsers(userID?: number): User | User[] | null {
    if (userID !== undefined) {

        const user = users.find(user => user.UserID === userID);
        return user || null; 
    }

    return users;
}


export function fetchLocation(LocationID?: number): Location | Location[] | null {
    if (LocationID !== undefined) {

        const location = locations.find(user => user.LocationID === LocationID);
        return location || null; 
    }

    return location;
}