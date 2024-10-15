import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Динамічний імпорт без SSR
const GraffitiMap = dynamic(() => import('../components/GraffitiMap'), {
    ssr: false
});

const MapPage = () => {
    return (
        <div>
            <GraffitiMap />
        </div>
    );
};

export default MapPage;
