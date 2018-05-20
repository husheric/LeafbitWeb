import React, { Component } from 'react';
import GoogleMap, { Marker } from 'google-map-react';
import { geolocated } from 'react-geolocated';
import axios from 'axios';
import cactus from '../images/cactus.png';

// import map_options from '../util';
import TreeMarker from './TreeMarker';
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
			zoom: 11,
			treeMarkers: []
		}
	}

	fetchTreeMarkers = () => {
		axios.get(`/getTreeMarkers`)
			.then(res => {
				this.setState({
					treeMarkers: res.data.data
				})
			})
	}

	getCurrentLocation = () => {
		if (!this.state.receivedUserCoord && this.props.isGeolocationAvailable && this.props.isGeolocationEnabled && this.props.coords) {
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
		this.getCurrentLocation();
		console.log(this.state)
		return (
			<div style={{ height: '900px', width: '900px' }} >
				<button onClick={this.handleNewMarker}>new tree</button>
        <GoogleMap
          bootstrapURLKeys={{ key: google_map_api_key }}
          center={this.state.center || {lat: 40.7429446, lng: -73.941878}}
          zoom={this.state.zoom || 11}
          options={{ styles: map_options }}
          onClick={this.onClick}
        >
        	{this.state.treeMarkers.map(marker => (
        		<TreeMarker
        			lat={marker.lat}
        			lng={marker.lng}
        			marker={marker}
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