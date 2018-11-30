import Config from '../config/config';
import React from 'react';
import MapController from './map-controller';
import io from 'socket.io-client';

class Controller extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			currentZoom: 0,
		};

		console.log('hello');

		this.getVideo = this.getVideo.bind(this);
		this.handleMapZoom = this.handleMapZoom.bind(this);
		this.setVideo = this.setVideo.bind(this);
	}

	componentDidMount() {
		const socket = io(Config.server());
		this.setState({
			socket: socket
		}, () => {
			this.setVideo(0);	
		});
		
	}

	render() {
		return (
			<MapController onZoom={this.handleMapZoom} />
		);
	}

	setVideo(videoNum) {
		this.setState({
			currentVideo: videoNum,
		}, () => {
			this.state.socket.emit('msg', this.state.currentVideo);
		});
	}

	getVideo(zoom) {
		const p = (zoom - Config.minZoom) / (Config.maxZoom - Config.minZoom);
		const videoNum = Math.floor(p * Config.numVideos);
		if (videoNum !== this.state.currentVideo) {
			this.setVideo(videoNum);
		}
	}

	handleMapZoom(zoom) {
		this.getVideo(zoom);
	}
}

module.exports = Controller;