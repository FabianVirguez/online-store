import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
    const { status } = data;
    const mapContainerStyle = {
        height: "50vh",
        width: "100%"
    }

    const DataCenter = {
        lat: data.lat, lng: data.lng
    }

    const defaultCenter = {
        lat: 19.4267261, lng: -99.1718706
    }

    return (
        <LoadScript googleMapsApiKey='AIzaSyALoTijwKJMZ32NGCPEuPmZYwxGC6rVJ2Q' >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={17}
                center={status === 'OK' ? DataCenter : defaultCenter}
            >
                <Marker position={status === 'OK' ? DataCenter : defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;