var World = function() {

	this.light = null;
	this.ambientCoefficient = 0.2;

	Object.defineProperty(this, 'objects', {enumerable: true, value: []});
};

World.prototype.getFirstIntersection = function( eye, ray ) {
	for( var i = 0; i < this.objects.length; i++) {
		var pt = this.objects[i].intersection(eye, ray.normalize() );
		if (pt) {
			return { object: this.objects[i], point: pt };
		}
	}

	return null;
};
Object.defineProperty(NS, 'World', {enumerable:true, value: World});