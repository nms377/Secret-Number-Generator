'use strict';
module.exports = function() {

var secretNumber = Math.random()*1000000;		//declare a var that wil produce your random number. This is in the parent scope


	return function(){			//this invokes the method in your var b/c a var cannot invoke it for you
		return secretNumber;	// this returns the result of the method in your global var
	};

};

// number range 0 to 1000000

// call a random number

	//	Use Math.random();

// call same random number every time function is invoked

