'use strict';

var s = 'hello';
function greet(name) {
	console.log(s + ' ' + name);
};

function hello(){
	greet(s);
}


module.exports = {
	greet : greet,
	hello : hello
	};