(function() {
	document.addEventListener('DOMContentLoaded', function() {

		var VERSION = "0.9";
		console.log("Lambda I/O | Lambda I/O Logo Generator | Version: " + VERSION);

		var	saveBtn = document.getElementById('saveBtn');
		var	cityInput = document.getElementById('cityInput');
		var	pattern = document.getElementById('lambda_pattern');
		var cityName = pattern.getElementById('cityName');

		var changeLocation = function(locationName) {
			cityName.textContent = locationName;
			setWidth();
		};

		var setWidth = function() {
			var newWidth = cityName.getBBox().width + 80;
			pattern.viewBox.baseVal.width = newWidth;
			pattern.width.baseVal.value = newWidth;
		};

		cityInput.onchange = function() {
			changeLocation(this.value);
		};

		cityInput.onkeyup = cityInput.onkeydown = cityInput.onchange;

		var saveImage = function() {
			var	a = document.createElement('a');
			a.href = 'data:image/svg+xml;base64,' + btoa(new XMLSerializer().serializeToString(pattern));
			a.download = 'LambdaIO_' + cityInput.value + '_logo.svg';
			a.type = 'image/svg+xml';
		  a.target = "_new";
		  a.onclick = function() {
		    this.parentNode.removeChild(this);
		  };
		  document.body.appendChild(a);
		  a.click();
		};

		saveBtn.addEventListener('click', saveImage);
	});
}());