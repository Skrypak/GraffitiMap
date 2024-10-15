import { User } from "@/db/Placeholder/DataTypes";


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
            <p>Join Date: {user.JoinDate}</p>
            <p>Birth Date: {user.BirthDate ? user.BirthDate : 'Not provided'}</p>
            <p>Address: {user.Address || 'Not provided'}</p>
            <p>Notifications: {user.Notify ? 'Enabled' : 'Disabled'}</p>
        </div>
    );
}