import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamic import without SSR
const GraffitiMap = dynamic(() => import('../components/GraffitiMap'), {
    ssr: false
});

const MapPage = () => {
    return (
        <div>
            <h1>Graffiti Map</h1>
            <GraffitiMap />
        </div>
    );
};

export default MapPage;
