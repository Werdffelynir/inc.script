var mod1 = mod1 || {};

(function(obj){

	console.log('init mod1');

	obj.elem = {a:{b:{c:115}}};

	obj.method = function(){console.log('method mod1')};

})(mod1);