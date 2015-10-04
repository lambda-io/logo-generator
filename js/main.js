(function() {
	document.addEventListener('DOMContentLoaded', function() {

		var gnrVsn = "0.9";
		console.log("Lambda I/O | Lambda I/O Logo Generator | Version: " + gnrVsn);

		var cityInput = document.getElementById('cityInput');
		var pattern = document.getElementById('lambda_pattern');

		var changeLocation = function(locationName) {
			var cityName = pattern.getElementById('cityName');
			cityName.textContent = locationName;
			setWidth();
		};

		var setWidth = function() {
			var newWidth = cityName.getBBox().width + 80;
			pattern.viewBox.baseVal.width = newWidth;
			pattern.width.baseVal.value = newWidth;
		};

		cityInput.onchange = function(e) {
			changeLocation(this.value);
		}

		cityInput.onkeydown = cityInput.onchange;

	});
}())