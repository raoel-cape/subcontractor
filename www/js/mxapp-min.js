(function() {
	window.startup = function(b) {
		dojoConfig = {
			baseUrl : b + "/mxclientsystem/dojo/",
			appbase : b + "/"
		}
	};
	window.addCss = function(b) {
		var c = document.getElementsByTagName("head")[0], a = document
				.createElement("link");
		a.type = "text/css";
		a.rel = "stylesheet";
		a.href = dojoConfig.appbase + b;
		a.media = "screen";
		c.appendChild(a);
	};
	window.addScript = function(b, c) {
		var a = document.getElementsByTagName("head")[0], d = document
				.createElement("script");
		d.type = "text/javascript";
		d.src = dojoConfig.appbase + b;
		c && (d.onload = c);
		a.appendChild(d)
	}
})();