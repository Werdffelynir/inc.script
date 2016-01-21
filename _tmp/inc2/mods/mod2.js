var mod2 = mod2 || {};

(function(obj){

	console.log('init mod2');

	obj.elem = {a:{b:{c:115}}};

	obj.method = function(){console.log('method mod2')};

})(mod2);