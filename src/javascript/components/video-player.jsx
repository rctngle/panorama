import Config from '../config/config';
import React from 'react';
import io from 'socket.io-client';


class VideoPlayer extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			videoNumber: 0,
		};

	}

	componentDidMount() {
		const socket = io(Config.server());
		// socket.emit('msg', 'foo');

		socket.on('video', (number) => {
			this.setState({
				videoNumber: number,
			});
			
		});
	}

	render() {
		return (
			<h1>Play video: {this.state.videoNumber}</h1>
		);
	}
}

module.exports = VideoPlayer;