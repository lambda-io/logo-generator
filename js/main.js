var cityInput = document.getElementById('cityInput');
var pattern = document.getElementById('lambda_pattern');

cityInput.onchange = function() {
	var logoSVG = pattern.getSVGDocument();
	var cityName = logoSVG.getElementById('cityName');
	cityName.textContent = this.value;
}

cityInput.onkeyup = cityInput.onkeydown = cityInput.onchange;