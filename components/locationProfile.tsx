type LocationProfileProps = {
    location: any;
};

export default function LocationProfile({ location }: LocationProfileProps) {
    return (
        <div>
            <h1>Location Profile</h1>
            <p>Location: {location.id}</p>
        </div>
    );
}