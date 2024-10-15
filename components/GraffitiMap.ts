import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { fetchLocation } from "@/db/Placeholder/fetchFunctions";
import { Location } from "@/db/Placeholder/DataTypes";


const GraffitiMap = () => {
    const [graffiti, setGraffiti] = useState<Location[]>([]);
    const [markerPosition, setMarkerPosition] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        tags: '',
        user: '',
        imageUrl: ''
    });

    useEffect(() => {
        // Заміна API запиту для завантаження даних
        const loadGraffiti = () => {
            const locationsData = fetchLocation(); // Assuming this fetches all locations
            if (locationsData) {
                setGraffiti(locationsData);
            }
        };
        loadGraffiti();
    }, []);

    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
                setMarkerPosition(e.latlng);
            }
        });
        return null;
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const addGraffiti = () => {
        const { title, tags, user, imageUrl } = formData;
        const tagsArray = tags.split(',');

        if (markerPosition) {
            fetch('http://localhost:3000/graffiti', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    location: {
                        latitude: markerPosition.lat,
                        longitude: markerPosition.lng,
                    },
                    tags: tagsArray,
                    user,
                    imageUrl
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Graffiti added:', data);
                    setGraffiti([...graffiti, data]);
                })
                .catch(error => console.error('Error adding graffiti:', error));
        } else {
            alert('Please click on the map to place a marker before adding graffiti.');
        }
    };

    return (
        <div>
            <h1>Interactive Graffiti Map</h1>
            <MapContainer center={[50.4501, 30.5234]} zoom={12} style={{ height: '600px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {markerPosition && <Marker position={markerPosition} />}
                {graffiti.map((g) => (
                    <Marker key={g.LocationID} position={[g.latitude, g.longitude]}>
                    </Marker>
                ))}
                <MapClickHandler />
            </MapContainer>

            <div style={{ margin: '20px' }}>
                <h2>Add Graffiti</h2>
                <input type="text" id="title" placeholder="Graffiti Title" value={formData.title} onChange={handleInputChange} required />
                <input type="text" id="tags" placeholder="Tags (comma-separated)" value={formData.tags} onChange={handleInputChange} required />
                <input type="text" id="user" placeholder="User Name" value={formData.user} onChange={handleInputChange} required />
                <input type="text" id="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleInputChange} required />
                <button onClick={addGraffiti}>Add Graffiti</button>
            </div>
        </div>
    );
};

export default GraffitiMap;
