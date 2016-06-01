var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#output").text(result);
	});
});

/*var weight = parseInt(prompt("What is your weight (in pounds):"));
var height = parseInt(prompt("What is your height (in inches):"));

var weightMetric = function(weight) {
	return weight * .45;
};

var heightMetric = function(height) {
	return height * .025;
};

var convertedWeight = weightMetric(weight);

var convertedHeight = heightMetric(height);

var heightSquared = function(convertedHeight) {
	return convertedHeight * convertedHeight;
};

var heightResult = heightSquared(convertedHeight);

var bmi = function(convertedWeight, heightResult) {
	return convertedWeight / heightResult;
};

var resultBmi = bmi(convertedWeight, heightResult);

alert("your BMI is " + resultBmi);*/
