# inc.script

# Use
```
var inc = new Inc();

// added script for load
inc.require('./app_classes/db.js');
inc.require('./app_classes/cookie.js');
inc.require('./app_classes/worker.js');

inc.onerror = function(error){}; // execute when load script have error
inc.onload = function(){}; // execute when all scripts is loaded
```
