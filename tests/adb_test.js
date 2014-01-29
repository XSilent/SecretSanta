/**
 *
 * @param message
 * @constructor
 */
function ExceptionTestFail(message){ this.message = message; this.name = 'TestFail'; };

var ADB = ADB || {};
ADB.Test = ADB.Test || {};

/**
 *
 * @constructor
 */
ADB.Test.Suite = function()
{
	/**
	 *
	 * @type {Array}
	 * @private
	 */
	var _tests = [];

	/**
	 *
	 * @type {boolean}
	 * @private
	 */
	var _verbose = false;

	/**
	 *
	 * @param verbose
	 */
	this.setVerbose = function(verbose)
	{
		_verbose = verbose;
	};

	/**
	 *
	 * @returns {boolean}
	 */
	this.getVerbose = function()
	{
		return _verbose;
	};

	/**
	 *
	 * @param test
	 */
	this.addTest = function(name, test)
	{
		_tests[name] = test;
	};

	/**
	 *
	 * @param assertion
	 * @param value
	 * @param message
	 * @returns {boolean}
	 */
	this.assert = function(assertion, value, message)
	{
		var result = false;

		if (this.getVerbose()) {
			console.log('assert ' + message);
		}

		if (assertion == value) {
			result = true;
		} else {
			throw new ExceptionTestFail(message);
		}

		return result;
	};

	/**
	 *
	 */
	this.runTests = function()
	{
		var _fails = [];

		var testCount = 0;
		for(var name in _tests) {

			console.log('running test: ', name);
			testCount++;

			try {
				(_tests[name])();
			} catch (e) {
				_fails[name] = e;
			}
		}

		var failCount = 0;
		for(var fail in _fails) {
			failCount++;
			console.error('failed: ', fail, _fails[fail].message);
		}

		console.log('Failed ' + failCount + ' of ' + testCount + ' tests');
	};
};