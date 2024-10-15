import UserProfileComponent from "@/components/userProfile";
import { fetchUsers } from "@/db/Placeholder/fetchFunctions";
import { User } from "@/db/Placeholder/DataTypes";

type ProfilePageProps = {
    params: {
        index: string;
    };
};

export default async function ProfilePage({ params }: ProfilePageProps) {
    const user = fetchUsers(Number(params.index));

    return (
        <UserProfileComponent user={user}/>
    );
}