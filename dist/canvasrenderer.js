(function() {
	window.trace = function(options) {
		RT = RayTracer;
		options = options || {
			sphere: {
				x: 0,
				y: 0,
				z:-400,
				r: 200,
				color: new RT.Color(0,1,0)
			},
			light: new RT.Point(-320, -240, 0)
		};
		var canvas = document.getElementById('canvas');

		var tracer = new RT.Tracer();
		tracer.camera = new RT.Point(0,0,1000);
		tracer.FOV = new RT.FOV(0-canvas.width/2, 0-canvas.height/2, canvas.width, canvas.height);

		tracer.world.objects.push(new RT.Sphere(options.sphere.x, options.sphere.y, options.sphere.z, options.sphere.r, options.sphere.color));
		tracer.world.light = options.light;

		var pixels = tracer.trace();
		var w = tracer.FOV.width;
		var h = tracer.FOV.height;

		
		var context = canvas.getContext('2d');
		var img = context.getImageData(0,0,canvas.width, canvas.height);
		
		for( var y = 0; y < h; y++) {
			for (var x = 0; x < w; x++ ) {
				var idx = ((w*y)+x)*4;
				// if( pixels[x][y].r > 0) {
				// 	debugger;
				// }
				img.data[idx]   = pixels[x][y].r*255;
				img.data[idx+1] = pixels[x][y].g*255;
				img.data[idx+2] = pixels[x][y].b*255;
				img.data[idx+3] = 255;
			}
		}

		context.putImageData(img, 0, 0);
	}
})();