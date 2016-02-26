
/* 

- Определение загрузки всех зависимых скриптов
- Загрузка зависимых скриптов
- Определение глобального объекта приложения "app" 
- Определение свойст объектов подключаемых зависимых скриптов

"db.js"
"cookie.js"
"worker.js"

*/


var app = app || {
    
    /*modules*/
	db:{},
	cookie:{},
	worker:{},
    
    /*options*/
    options:{}
};  


(function(window, app){
    
    var inc = new Inc();
    
    inc.require('./app_classes/db.js');
    inc.require('./app_classes/cookie.js');
    inc.require('./app_classes/worker.js');
    
    inc.onerror = _errorLoading;
    inc.onload = _constructor;
    inc.init();
    
    function _errorLoading(error){
        console.error('Error on loading script', error);
    }
    function _constructor(){
        console.log('loading scripts success');
        
        console.log(app.db);

        console.log(app.cookie);

        console.log(app.worker);
        
        app.worker.initTree(function(loadedScripts){

            console.log('worker.initTree loaded', loadedScripts);

        });
    }
    
    /*app methods*/

})(window, app);
