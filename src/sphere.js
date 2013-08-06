var Sphere = function(x,y,z,r,color) {
	if (arguments.length === 1) {
		x = arguments[0].x || 0;
		y = arguments[0].y || 0;
		z = arguments[0].z || 0;
		r = arguments[0].r || 1;
		r = arguments[0].color || new Color(1,0,0);
	} else {
		x = x || 0;
		y = y || 0;
		z = z || 0;
		r = r || 0;
		color = color || new Color(1,0,0);
	}

	Object.defineProperty(this, 'x', {enumerable: true, value: x});
	Object.defineProperty(this, 'y', {enumerable: true, value: y});
	Object.defineProperty(this, 'z', {enumerable: true, value: z});
	Object.defineProperty(this, 'r', {enumerable: true, value: r});
	Object.defineProperty(this, 'color', {enumerable: true, value: color});
};

Sphere.prototype.intersection = function(eyePos, rayVector) {
	if ( ! rayVector.normal ) {
		rayVector = rayVector.normalize();
	}

	var e0 = Vector.distanceVector(eyePos, this);
	var v = e0.dot( rayVector );
	var disc = (this.r*this.r) - (e0.dot(e0) - v*v);

	if (disc < 0) {
		return null;
	} else {
		var d = Math.sqrt( disc );
		return eyePos.translate( rayVector.mult(v-d) );
	}
};

Sphere.prototype.normalVector = function( point ) {
	return Vector.distanceVector(this, point);
};

Object.defineProperty(NS, 'Sphere', {enumerable: true, value: Sphere});