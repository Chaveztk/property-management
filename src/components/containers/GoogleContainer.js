import React from 'react';
import GoogleMapReact from 'google-map-react';

class Google extends React.Component {
    static defaultProps = {
        center: {
            lat: 51.489843,
            lng: -0.065793
        },
        zoom: 10
    };

    render() {
        const containerStyle = {
            position: 'static',
            width: '500px',
            height: '300px'
        }
        return (
            <div style={containerStyle}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyC46mPfq5Cd4ni2XfuATWWFh5YBUOrM73U'}}
                    defaultCenter={Google.defaultProps.center}
                    defaultZoom={Google.defaultProps.zoom}
                    onGoogleApiLoaded={({map, maps}) => {
                        new maps.Marker({
                            position: {
                                lat: 51.489843,
                                lng: -0.065793
                            },
                            title: "Hello World!",
                        });
                    }}
                    yesIWantToUseGoogleMapApiInternals
                >
                </GoogleMapReact>
            </div>
        )

    }
}


export default Google;