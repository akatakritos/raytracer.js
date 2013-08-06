var Color = function(r,g,b) {
	if (arguments.length == 1) {
		r = arguments[0].r || 0;
		g = arguments[0].g || 0;
		b = arguments[0].b || 0;
	} else {
		r = r || 0;
		g = g || 0;
		b = b || 0;
	}

	Object.defineProperty(this, 'r', {enumerable: true, value: r});
	Object.defineProperty(this, 'g', {enumerable: true, value: g});
	Object.defineProperty(this, 'b', {enumerable: true, value: b});
};

Color.prototype.mult = function( scalar ) {
	return new Color(
		this.r * scalar,
		this.g * scalar,
		this.b * scalar
	);
};

Color.prototype.lambertShade = function( lightVector, normalVector, ambientCoefficient ) {
	ambientCoefficient = ambientCoefficient || 0.2;

	var shade = lightVector.dot( normalVector );
	if ( shade < 0 ) {
		shade = 0;
	}

	return this.mult( ambientCoefficient + (1 - ambientCoefficient) * shade);
};

Color.fromHexString = function( str ) {
	var r = parseInt(str.substring(0,2),16) / 255;
	var g = parseInt(str.substring(2,4),16) / 255;
	var b = parseInt(str.substring(4,6),16) / 255;
	return new Color(r,g,b);
};
Object.defineProperty(NS, 'Color', {enumerable: true, value: Color} );