var FOV = function(x,y,width,height) {
	if (arguments.length === 1) {
		x = arguments[0].x || -320;
		y = arguments[0].y || -240;
		width = arguments[0].width || 640;
		height = arguments[0].height || 480;
	} else {
		x = x || -320;
		y = y || -240;
		width = width || 640;
		height = height || 480;
	}

	Object.defineProperty(this, 'x', {enumerable: true, value: x});
	Object.defineProperty(this, 'y', {enumerable: true, value: y});
	Object.defineProperty(this, 'width', {enumerable: true, value: width});
	Object.defineProperty(this, 'height', {enumerable: true, value: height});
};

Object.defineProperty(NS, 'FOV', {enumerable: true, value: FOV});