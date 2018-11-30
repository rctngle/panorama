module.exports = {
	ip: '172.17.17.30',
	port: '3000',
	minZoom: 0,
	maxZoom: 20,
	numVideos: 7,
	server: function() {
		return 'http://' + this.ip + ':' + this.port;
	}
};