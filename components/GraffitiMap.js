import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useRouter } from 'next/router'; // Use Next.js useRouter instead
import L from 'leaflet';
import customMarkerImage from "@/public/marker.png" // Update with the correct path to your image
import 'leaflet/dist/leaflet.css';

// Create a custom icon
const customIcon = L.icon({
    iconUrl: customMarkerImage,
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
});

const GraffitiMap = () => {
    const [graffiti, setGraffiti] = useState([]);
    const [markerPosition, setMarkerPosition] = useState(null);
    const [formData, setFormData] = useState({
        location: '',
        description: '',
        photoIDs: '',
        user: ''
    });

    const router = useRouter(); // Initialize useRouter

    useEffect(() => {
        fetch('http://localhost:3000/api/graffiti')
            .then(response => response.json())
            .then(data => {
                setGraffiti(data);
                if (data.length > 0) {
                    setMarkerPosition({ lat: data[0].latitude, lng: data[0].longitude });
                }
            })
            .catch(error => console.error('Error fetching graffiti:', error));
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
        const { location, description, photoIDs, user } = formData;
        const photoIDsArray = photoIDs.split(',');

        if (markerPosition) {
            fetch('http://localhost:3000/api/graffiti', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    Location: location,
                    Description: description,
                    PhotoID: photoIDsArray.join(','),
                    HunterID: user,
                    latitude: markerPosition.lat,
                    longitude: markerPosition.lng,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Graffiti added:', data);
                    setGraffiti([...graffiti, data]);
                    console.log(`Added graffiti at position: Latitude: ${markerPosition.lat}, Longitude: ${markerPosition.lng}`);
                })
                .catch(error => console.error('Error adding graffiti:', error));
        } else {
            alert('Please click on the map to place a marker before adding graffiti.');
        }
    };

    const handleMarkerClick = (id) => {
        router.push(`/location/${id}`); // Navigate to the specific location using Next.js router
    };

    return (
        <div>
            <MapContainer center={[50.4501, 30.5234]} zoom={12} style={{ height: '600px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {markerPosition && <Marker position={markerPosition} icon={customIcon} />}
                {graffiti.map((g) => (
                    <Marker 
                        key={g.LocationID} 
                        position={[g.latitude, g.longitude]} 
                        icon={customIcon} // Use custom icon here
                        eventHandlers={{ 
                            click: () => handleMarkerClick(g.LocationID) // Handle click event
                        }}
                    >
                        {/* You can also customize the marker here if needed */}
                    </Marker>
                ))}
                <MapClickHandler />
            </MapContainer>

            <div style={{ margin: '20px' }}>
                <h2>Add Graffiti</h2>
                <input type="text" id="location" placeholder="Location" value={formData.location} onChange={handleInputChange} required />
                <input type="text" id="description" placeholder="Description" value={formData.description} onChange={handleInputChange} required />
                <input type="text" id="photoIDs" placeholder="Photo IDs (comma-separated)" value={formData.photoIDs} onChange={handleInputChange} required />
                <input type="text" id="user" placeholder="User ID" value={formData.user} onChange={handleInputChange} required />
                <button onClick={addGraffiti}>Add Graffiti</button>
            </div>
        </div>
    );
};

export default GraffitiMap;