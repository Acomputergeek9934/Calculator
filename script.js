let result = document.getElementById('result');

function buttonClick(value) {
	result.value += value;
}

function clearResult() {
	result.value = '';
}

function calculate() {
	try {
		result.value = eval(result.value);
	} catch (error) {
		result.value = 'Error';
	}
}
