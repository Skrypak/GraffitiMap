import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const GraffitiMap = () => {
    const [graffiti, setGraffiti] = useState([]);
    const [markerPosition, setMarkerPosition] = useState(null);
    const [formData, setFormData] = useState({
        location: '',
        description: '',
        photoIDs: '',
        user: '' // assuming you still want a user field
    });

    useEffect(() => {
        // Fetching graffiti data on component mount
        fetch('http://localhost:3000/api/graffiti')
            .then(response => response.json())
            .then(data => {
                // Set graffiti data
                setGraffiti(data);
                // Optionally, set marker position if you want to center the map on the first graffiti
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
                    PhotoID: photoIDsArray.join(','), // send as a comma-separated string
                    HunterID: user, // if this corresponds to user
                    latitude: markerPosition.lat,
                    longitude: markerPosition.lng,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Graffiti added:', data);
                    setGraffiti([...graffiti, data]);

                    // Debug: Log the position of the added graffiti dot
                    console.log(`Added graffiti at position: Latitude: ${markerPosition.lat}, Longitude: ${markerPosition.lng}`);
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
