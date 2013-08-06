var Tracer = function() {
	Object.defineProperty(this, 'camera', {enumerable: true, writable: true, value: new Point(0,0,500)});
	Object.defineProperty(this, 'FOV', {enumerable: true, writable: true, value: null});
	Object.defineProperty(this, 'world', {enumerable: true, writable: true, value: new World()});
	Object.defineProperty(this, 'background', {enumerable: true, writable: true, value: new Color(0,0,0)});
};

Tracer.prototype.trace = function() {
	var pixels = createPixelArray( this.FOV );
	for (var i = 0; i < this.FOV.width; i++) {
		for (var j = 0; j < this.FOV.height; j++) {
			var x = this.FOV.x + i;
			var y = this.FOV.y + j;
			var z = 0;

			var ray = Vector.distanceVector(this.camera, {x:x, y:y, z: z});
			pixels[i][j] = this.traceRay( ray );
		}
	}

	return pixels;
};

Tracer.prototype.traceRay = function( ray ) {
	var pointColor, reflectColor, refractColor;
	var object;

	var intersection = this.world.getFirstIntersection(this.camera, ray );
	if (intersection) {
		return this.calculatePointColor( intersection );
	} else {
		return this.background;
	}
};

Tracer.prototype.calculatePointColor = function( intersection ) {
	var lightVector = Vector.distanceVector(intersection.point, this.world.light).normalize();
	var normalVector = intersection.object.normalVector( intersection.point ).normalize();
	return intersection.object.color.lambertShade(lightVector, normalVector, this.world.ambientCoefficient);
};

var createPixelArray = function( fov ) {
	var pixels = Array(fov.width);
	for(var i = 0; i < fov.width; i++) {
		pixels[i] = Array(fov.height);
	}

	return pixels;
};

Object.defineProperty(NS, 'Tracer', {enumerable: true, value: Tracer});