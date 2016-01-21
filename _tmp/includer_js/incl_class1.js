var objOne = objOne || {};

(function(obj){

	console.log('init objOne');

	obj.elem = {
		a:{
			b:{
				c:115
			}
		}
	};

	obj.construct = function(){console.log('construct objOne')};

	obj.method = function(){console.log('method objOne')};

})(objOne);