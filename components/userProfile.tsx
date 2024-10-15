type User = {
    UserId: number;
    Email: string;
    Username: string;
    Password: string;
    JoinDate: Date;
    BirthDate?: Date;
    RoleID?: number;
    ProfilePicture?: Uint8Array; // Using Uint8Array for binary data
    ContantCredentials?: string;
    Address?: string;
    Notify?: boolean;
};

type UserProfileProps = {
    user: User;
};

export default function UserProfileComponent({ user }: UserProfileProps) {
    return (
        <div>
            <h2>User Profile</h2>
            <img src={user.ProfilePicture ? URL.createObjectURL(new Blob([user.ProfilePicture])) : ''} alt="Profile" />
            <p>Email: {user.Email}</p>
            <p>Username: {user.Username}</p>
            <p>Join Date: {user.JoinDate.toDateString()}</p>
            <p>Birth Date: {user.BirthDate ? user.BirthDate.toDateString() : 'Not provided'}</p>
            <p>Address: {user.Address || 'Not provided'}</p>
            <p>Notifications: {user.Notify ? 'Enabled' : 'Disabled'}</p>
        </div>
    );
}