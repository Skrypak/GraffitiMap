import LocationProfile from "@/components/locationProfile";

type LocationPageProps = {
    params: {
        index: string;
    };
};

export default async function ProfilePage({ params }: LocationPageProps) {
    const { index } = params;
    const location = { id: index };

    return (
        <div>
            <LocationProfile location={location}/>
        </div>
    );
}