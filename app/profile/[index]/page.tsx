type ProfilePageProps = {
    params: {
        index: string;
    };
};

export default async function ProfilePage({ params }: ProfilePageProps) {
    const { index } = params;
    const user = { id: index };

    return (
        <div>
            <h1>Profile Page</h1>
            <p>ID: {user.id}</p>
        </div>
    );
}