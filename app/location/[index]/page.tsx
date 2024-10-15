import LocationProfileComponent from "@/components/locationProfile";
import { fetchLocation } from "@/db/Placeholder/fetchFunctions";

type LocationPageProps = {
    params: {
        index: string;
    };
};

export default async function ProfilePage({ params }: LocationPageProps) {
    const { index } = params;
    const location = fetchLocation(Number(index));

    return (
        <div>
            <LocationProfileComponent location={location}/>
        </div>
    );
}