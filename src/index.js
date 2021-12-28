module.exports = function reverse(n) {
	let answerStr = '';
	for (let i = String(n).length - 1; i >= 0; i--) {
		answerStr += String(n)[i];
	}
	return (answerStr[answerStr.length - 1] === '-') ? answerStr.slice(0, -1) : answerStr;
}
