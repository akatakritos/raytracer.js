
	if (typeof module !== 'undefined' &&
		typeof module.exports !== 'undefined') {
		module.exports = NS
	} else {
		window.RayTracer = NS;
	}

})();