(function() {
	window.trace = function() {
		RT = RayTracer
		var tracer = new RT.Tracer();
		tracer.camera = new RT.Point(0,0,1000);
		tracer.FOV = new RT.FOV();

		tracer.world.objects.push(new RT.Sphere(0,0, -400, 200));

		var pixels = tracer.trace();
		var w = tracer.FOV.width;
		var h = tracer.FOV.height;

		var canvas = document.getElementById('canvas');
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