const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		var newArr = [];
		let i = 1;
		(function calc(arr) {
			arr.forEach(function (el) {
				if (Array.isArray(el)) {
					calc(el);
					i++;
				}
				else newArr.push(el);
			});
		})(arr);
		return i;
	}
}

module.exports = {
	DepthCalculator
};
