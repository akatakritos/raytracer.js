var Vector = function(x,y,z) {
	if (arguments.length === 1) {
		x = arguments[0].x || 0;
		y = arguments[0].y || 0;
		z = arguments[0].z || 0;
	} else {
		x = x || 0;
		y = y || 0;
		z = z || 0;
	}

	Object.defineProperty(this, 'x', { enumerable: true, value: x});
	Object.defineProperty(this, 'y', { enumerable: true, value: y});
	Object.defineProperty(this, 'z', { enumerable: true, value: z});
};

Object.defineProperty(Vector, 'ZERO', {value: new Vector(0,0,0)} );

Vector.prototype.add = function( v ) {
	return new Vector(
		this.x + v.x,
		this.y + v.y,
		this.z + v.z
	);
};

Vector.prototype.sub = function( that ) {
	return new Vector(
		this.x - that.x,
		this.y - that.y,
		this.z - that.z
	);
};

Vector.prototype.mult = function( scalar ) {
	return new Vector(
		this.x * scalar,
		this.y * scalar,
		this.z * scalar
	);
};

Vector.prototype.magnitude = function() {
	return Math.sqrt(
		this.x * this.x +
		this.y * this.y +
		this.z * this.z
	);
};

Vector.prototype.cross = function( that ) {
	return new Vector(
		this.y * that.z - that.y * this.z,
		this.z * that.x - that.z * this.x,
		this.x * that.y - that.x * this.y
	);
};

Vector.prototype.dot = function( that ) {
	return this.x * that.x +
		this.y * that.y +
		this.z * that.z;
};

Vector.prototype.normalize = function() {
	var v = this.mult( 1/this.magnitude() );
	v.normal = true;
	return v;
};

Vector.prototype.angle = function( that ) {
	return Math.acos( this.dot(that) );
};

Vector.distanceVector = function(p0, p1) {
	return Vector.prototype.sub.call(p1, p0);
};



Object.defineProperty(NS, 'Vector', {enumerable: true, value: Vector});