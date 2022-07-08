module.exports = function toReadable (number) {

	let r1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let r2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let r3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let r4 = 'hundred';
	
	let numberStr = number.toString();
	
	if (number < 10) {
		return r1[number];
	} else if (number >= 10 && number <= 19) {
		return r2[numberStr.slice(-1)];
	} else if (number >= 20 && number < 100) {
		if (numberStr.slice(-1) == 0) {
			return r3[numberStr.slice(-2, -1) - 2];
		}
		return r3[numberStr.slice(-2, -1) - 2] + ' ' + r1[numberStr.slice(-1)];
	} else if (number >=100 && number < 1000) {
		if (numberStr.slice(-2) == 00) {
			return r1[numberStr.slice(-3, -2)] + ' ' + r4;
		} else if (numberStr.slice(-2, -1) == 1) {
			return r1[numberStr.slice(-3, -2)] + ' ' + r4 + ' ' + r2[numberStr.slice(-1)];
		} else if (numberStr.slice(-1) == 0) {
			return r1[numberStr.slice(-3, -2)] + ' ' + r4 + ' ' + r3[numberStr.slice(-2, -1) - 2];
		} else if (numberStr.slice(-2, -1) == 0) {
			return r1[numberStr.slice(-3, -2)] + ' ' + r4 + ' ' + r1[numberStr.slice(-1)];
		}
		return r1[numberStr.slice(-3, -2)] + ' ' + r4 + ' ' + r3[numberStr.slice(-2, -1) - 2] + ' ' + r1[numberStr.slice(-1)];
	}

}
