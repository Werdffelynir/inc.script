var objThree = objThree || {};

(function(obj){
	
	console.log('init objThree');

	obj.construct = function(){console.log('construct objThree')};

	obj.method = function(){console.log('method objThree')};

})(objThree);