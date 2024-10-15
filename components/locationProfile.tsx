type Location = {
    LocationID: number;
    Location: string;
    Date: Date;
    PhotoID?: string; // Assuming this is a string with delimiters for multiple photo IDs
    Description?: string;
    StatusID?: number;
    HunterID?: number;
    TagID?: number;
};

type LocationProfileProps = {
    location: Location;
};

export default function LocationProfileComponent({ location }: LocationProfileProps) {
    return (
        <div>
            <h1>Location Profile</h1>
            <p>Location ID: {location.LocationID}</p>
            <p>Name: {location.Location}</p>
            <p>Date: {location.Date.toDateString()}</p>
            <p>Photos: {location.PhotoID ? location.PhotoID.split(',').join(', ') : 'No photos'}</p>
            <p>Description: {location.Description || 'No description available'}</p>
            <p>Status ID: {location.StatusID || 'Not specified'}</p>
            <p>Hunter ID: {location.HunterID || 'Not specified'}</p>
            <p>Tag ID: {location.TagID || 'Not specified'}</p>
        </div>
    );
}