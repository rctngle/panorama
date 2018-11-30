import Config from '../config/config';
import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import Tokens from '../config/tokens';

const Map = ReactMapboxGl({
	accessToken: Tokens.mapbox,
	dragRotate: false,
	attributionControl: false,
	
	minZoom: Config.minZoom,
	maxZoom: Config.maxZoom,
	dragPan: false,
});


class MapController extends React.Component {
	constructor(props) {
		super(props);		
		let style = 'mapbox://styles/anecdote101/cjp3umbi139dw2rt8cehhjdjc';

		this.state = {
			style: style,
			center: [-54.1874488, -6.4390765],
		};

		this.handleStyleLoaded = this.handleStyleLoaded.bind(this);
		this.handleMapZoom = this.handleMapZoom.bind(this);
	}

	render() {
		return (
			<div ref="map-container" id="map-container">
				<Map					
					style={this.state.style}
					zoom={[0]}
					center={this.state.center}
					onStyleLoad={this.handleStyleLoaded}
					onZoom={this.handleMapZoom}
					containerStyle={{
						height: '100vh',
						width: '100vw',
					}}>
				</Map>
			</div>
		);
	}

	handleMapZoom(map){
		map.setCenter([-59.8473823, -5.6163324]);
		this.props.onZoom(map.getZoom());
		
	}

	handleStyleLoaded(map) {
		
	}
}

module.exports = MapController;