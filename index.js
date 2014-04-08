var resolutions = require('time-resolutions');

function get_date(d){
	if(typeof(d)==="number"){
		d = new Date(d);
	}
	return d;
}

module.exports = function timestamp_range(start, end){
	if(arguments.length<=0){
		throw new Error('start and/or end needed for timestamp range');
	}

	start = get_date(start);
	end = get_date(end || new Date());

	var starttime = start.getTime();
	var endtime = end.getTime();

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
