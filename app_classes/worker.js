/**
 * Module worker.js
 */

(function(window, o){

	o.getUser = function(){};
	o.getSettings = function(){};
    
	o.initTree = function(func){
        var inc = new Inc();
        
        inc.require('./app_classes/db.js');
        inc.require('./app_classes/worker.js');
        inc.require('./app_classes/tree.js');
        inc.require('./app_classes/db.js');
        inc.require('./app_classes/url.js');
        inc.require('./app_classes/db.js');
        
        //console.log(inc);
        inc.onload = func;
        inc.init();
    };

})(window, app.worker);
