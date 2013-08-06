(function() {
	window.trace = function() {
		RT = RayTracer
		var tracer = new RT.Tracer();
		tracer.camera = new RT.Point(0,0,1000);
		tracer.FOV = new RT.FOV();

		tracer.world.objects.push(new RT.Sphere(0,0, -400, 200));

		var pixels = tracer.trace();
		console.log(pixels);
		console.log(tracer);
		var w = tracer.FOV.width;
		var h = tracer.FOV.height;

		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		var img = context.getImageData(0,0,canvas.width, canvas.height);
		
		for( var i = 0; i < w; i++) {
			for (var j = 0; j < h; j++ ) {
				var idx = i*h+j
				// if( pixels[i][j].r > 0) {
				// 	debugger;
				// }
				img.data[idx] = pixels[i][j].r*255;
				img.data[idx+1] = pixels[i][j].g*255;
				img.data[idx+2] = pixels[i][j].b*255;
				img.data[idx+3] = 255;
			}
		}

		context.putImageData(img, 0, 0);
	}
})();