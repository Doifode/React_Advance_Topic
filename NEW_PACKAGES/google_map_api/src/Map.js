import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
class Maps extends React.Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                initialCenter={{
                    lat: 16.704987, // Latitude of the initial center point
                    lng: 74.243256 // Longitude of the initial center point
                }}
                
        
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD_03cBXwBKFqm2y7zw_gbKz2is43mnjTg'
})(Maps);
