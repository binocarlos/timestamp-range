var resolutions = require('time-resolutions');

module.exports = function timestamp_range(start, end){
	if(arguments.length<=0){
		throw new Error('start and/or end needed for timestamp range');
	}

	if(!end){
		end = new Date();
	}
	
	var starttime = new Date(start).getTime();
	var endtime = new Date(end).getTime();

	if(endtime<starttime){
		throw new Error('end time cannot be before start time')
	}

	var gap = endtime-starttime;
	var resolution = resolutions.resolve(gap);
	var unit = resolutions[resolution];

	return {
		ms:gap,
		resolution:resolution,
		unit:unit,
		length:gap / unit
	}
}
