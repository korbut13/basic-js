const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	if (typeof sampleActivity !== 'string' || !sampleActivity) return false
	var regex = /\d+/g;
	var string = sampleActivity;
	var matches = string.match(regex);
	if (matches === null) return false
	let value = -(-sampleActivity);
	let ln = Math.log(15 / value)
	console.log(ln)


	return Math.floor(ln * 5729 / 0.693)


}

module.exports = {
	dateSample
};
