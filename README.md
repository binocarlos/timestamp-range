timestamp-range
===============

[![Travis](http://img.shields.io/travis/binocarlos/timestamp-range.svg?style=flat)](https://travis-ci.org/binocarlos/timestamp-range)

An object representing 2 timestamps - i.e. a 'gap' in time

## installation

```
$ npm install timestamp-range
```

## usage

Give a start and end date and get back an object with some useful functions:

```js
var timestamprange = require('timestamp-range');

// took a coupla mins to make some tea
var make_cuppa_tea = timestamprange(
	new Date('05/12/2014 11:10:45'),
	new Date('05/12/2014 11:16:23')
)

// took a coupla years to write a book
var write_book = timestamprange(
	new Date('02/12/2012 11:10:45'),
	new Date('03/26/2014 23:46:23'),
)

// 'minute'
var tea_res = make_cuppa_tea.resolution

// the number of minutes to make some tea (float)
var tea_len = make_cuppa_tea.length

// the number of milliseconds to make some tea (int)
var tea_ms = make_cuppa_tea.ms

// 'year'
var book_res = write_book.resolution

// the number of minutes to make write a book (float)
var book_len = write_book.length

// the number of milliseconds to write a book (int)
var book_ms = write_book.ms
```

## api

### var range = timestamprange(startdate, enddate);

create a new timestamp-range.

startdate and enddate can be Dates or timestamps

```js
// create with date objects
var range = timestamprange(
	new Date('05/12/2014 11:10:45'),
	new Date('05/12/2014 11:16:23')
)


// create with timestamps
var range = timestamprange(
	1394616600000,
	1394647200000
)
```

### var resolution = range.resolution

get a string that describes the resolution of the range.

this is decided by if there is more than 1 of the given amount.

So - 59 seconds is resolution 'minute' and length 59

66 seconds is resolution 'minute' and length 1.1

The resolution is a string one of:

 * millisecond
 * second
 * minute
 * hour
 * day

Month and years are not consistent when it comes to length and so its best to not make things complicated and just leave them out.

### var length = range.length

the float that is the number of 'resolution' in the gap.

So - a gap of 90 seconds would be resolution 'minute' and length 1.5

### var ms = range.ms

the number of milliseconds in a given range

## license

MIT