import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { geolocated } from 'react-geolocated';
import axios from 'axios';
import '../stylesheets/map.css';
import TreeMarker from './TreeMarker';
// import map_options from '../util';
// import google_map_api_key from '../util';

const google_map_api_key = 'AIzaSyByRHHWBOWtfnqgy_bBL6jIjmiRT0MitFQ';


/*
	____TODOS____
	displays map + trees planted

	____data needed____
	markers for trees planted
*/

const map_options = [
    {
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f5f5f2"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#71c8d4"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#e5e8e7"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "color": "#8ba129"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c7c7c7"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#a0d3d3"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "color": "#91b65d"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "gamma": 1.51
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road"
    },
    {
        "featureType": "road"
    },
    {},
    {
        "featureType": "road.highway"
    }
];

const style = {
    width: '100%',
    height: '100%',
    position: 'relative'
}

class TreeMap extends Component {
    constructor() {
        super();

        this.fetchTreeMarkers();

        this.state = {
            receivedUserCoord: false,
            center: {
                lat: 40.7429446,
                lng: -73.941878
            },
            zoom: 13,
            treeMarkers: [],
            newMarker: false
        }
    }

    componentDidMount() {
        this.getCurrentLocation()
    }

    fetchTreeMarkers = () => {
        axios
            .get(`/getTreeMarkers`)
            .then(res => {
                this.setState({
                    treeMarkers: res.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    getCurrentLocation = () => {
        const { isGeolocationAvailable, isGeolocationEnabled, coords } = this.props;
        const { receivedUserCoord } = this.state;

        if (!receivedUserCoord && isGeolocationAvailable && isGeolocationEnabled && coords) {
            this.setState({
                receivedUserCoord: true,
                userCoord: {
                    lat: this.props.coords.latitude,
                    lng: this.props.coords.longitude
                },
                center: {
                    lat: this.props.coords.latitude,
                    lng: this.props.coords.longitude
                },
                zoom: 13,
                newMarker: false
            });
        }
    }

    onClick = ({x, y, lat, lng, event}) => {
		if (this.state.newMarker) {
			const seedNames = [
				{ name: 'tree' },
				{ name: 'pine_tree' },
				{ name: 'tall_tree' },
				{ name: 'cactus' }
			];
			const tree = seedNames[Math.floor(Math.random() * Math.floor(4))].name;
			console.log(tree)

			axios.post('/insertTreeMarker', {
				planted_by: 1,
				tree,
				lat,
				lng
			})


			this.setState({
				treeMarkers: [...this.state.treeMarkers, { tree, lat, lng }],
				newMarker: false
			})
		}
	}

    handleNewMarker = () => {
        this.setState({
            newMarker: true
        })
    }

    render() {
        const { center, zoom, treeMarkers, newMarker } = this.state
        console.log(this.state)
        const cursorClass = newMarker ? `cursor-tree` : null

        return (
            <div className={`map-container ${cursorClass}`} data-aos="fade-up">
                <button onClick={this.handleNewMarker}>Plant a tree</button>
                <GoogleMap
                    bootstrapURLKeys={{ key: google_map_api_key }}
                    center={center || { lat: 40.7429446, lng: -73.941878 }}
                    zoom={zoom || 13}
                    options={{ styles: map_options }}
                    onClick={this.onClick}
                    style={style}
                >
                    {treeMarkers.map((marker, idx) => (
                        <TreeMarker
                            lat={marker.lat}
                            lng={marker.lng}
                            marker={marker}
                            key={idx}
                        />
                    ))}
                </GoogleMap>
            </div>
        )
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(TreeMap);

// this.state.treeMarkers.map(marker => (
//         		<Marker
//         			position={{ lat: marker.lat, lng: marker.lng }}
//         			options={{ icon: {url:cactus} }}
//         		/>
//         	))}