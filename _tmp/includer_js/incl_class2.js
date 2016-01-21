var objTwo = objTwo || {};

(function(obj){

	console.log('init objTwo');

	obj.construct = function(){console.log('construct objTwo')};

	obj.method = function(){console.log('method objTwo')};

})(objTwo);