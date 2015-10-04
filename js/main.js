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

cityInput.onchange = function() {
	changeLocation(this.value);
}

pattern.onload = setWidth();
cityInput.onkeyup = cityInput.onkeydown = cityInput.onchange;