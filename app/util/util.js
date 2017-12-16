

module.exports.getRandomNumber =function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports.getDeviceDetails = function(req){
	var devicePayload ={};
	devicePayload.name = req.headers['user-agent'].toLowerCase();
	devicePayload.type = req.headers['user-agent'].toLowerCase();
	devicePayload.httpversion = req.headers['user-agent'].toLowerCase();
	return devicePayload;
}