
var app = app || {};

(function(ob){

	ob.model = {};
	ob.router = {};

	var inc = new Inc();

	inc.require('/inc3/app/model');
	inc.require('/inc3/app/router');
	inc.require('/inc3/app/application');

	inc.onload = function(){app.construct()};
	inc.init();

})(app);
