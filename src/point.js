var Point = function(x,y,z) {
	if (arguments.length === 1) {
		x = arguments[0].x || 0;
		y = arguments[0].y || 0;
		z = arguments[0].z || 0;
	} else {
		x = x || 0;
		y = y || 0;
		z = z || 0;
	}

	Object.defineProperty(this, 'x', {enumerable: true, value:x});
	Object.defineProperty(this, 'y', {enumerable: true, value:y});
	Object.defineProperty(this, 'z', {enumerable: true, value:z});
};

Point.prototype.translate = function( vector ) {
	return new Point(
		this.x + vector.x,
		this.y + vector.y,
		this.z + vector.z
	);
};

Object.defineProperty(NS, 'Point', {enumerable: true, value: Point});