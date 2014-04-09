var timestamprange = require('../');

describe('timestamp-range', function(){

  it('should be a function', function() {
    timestamprange.should.be.a('function');
  })

  it('should throw with bad args', function() {

  	(function(){
  		var range = timestamprange();
		}).should.throw();

		(function(){

			var now = new Date().getTime();

  		var range = timestamprange(now, now-100);
		}).should.throw();
    
  })


  it('should be auto-fill the end-date as now', function() {

  	var end = new Date();
    var start = new Date(end.getTime()-150);

    var range = timestamprange(start);

    range.resolution.should.equal('millisecond')
    Math.floor(range.length/10).should.equal(15)
    
  })

  describe('resolutions', function(){

	  it('millisecond', function() {
	    
	    var start = new Date();
	    var end = new Date(start.getTime()+150);

	    var range = timestamprange(start, end);

	    range.resolution.should.equal('millisecond')
	    Math.floor(range.length/10).should.equal(15)
	  })

	  it('second', function() {
	    
	    var start = new Date('05/06/2014 11:46:12');
	    var end = new Date('05/06/2014 11:46:45');

	    var range = timestamprange(start, end);
	    range.resolution.should.equal('second')
	    range.length.should.equal(33);
	  })

	  it('minute', function() {
	    
	    var start = new Date('05/06/2014 11:46:12');
	    var end = new Date('05/06/2014 11:58:42');

	    var range = timestamprange(start, end);

	    range.resolution.should.equal('minute')
	    range.length.should.equal(12.5);
	  })

	  it('hour', function() {

	  	var start = new Date('05/06/2014 11:16:45');
	    var end = new Date('05/06/2014 14:46:45');

	    var range = timestamprange(start, end);

	    range.resolution.should.equal('hour')
	    range.length.should.equal(3.5);

	  })

	  it('day', function() {

	  	var start = new Date('05/06/2014 06:16:45');
	    var end = new Date('05/07/2014 18:16:45');

	    var range = timestamprange(start, end);

	    range.resolution.should.equal('day')
	    range.length.should.equal(1.5);

	  })


	})

})
