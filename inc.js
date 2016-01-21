(function(window){

	var Inc = function(){
		if(!(this instanceof Inc)) return new Inc();
	};
	
	Inc.prototype.options = {
		sources: [],
		handler: {onload:null,onerror:null},
		error: false,
		current: 0
	};

	Inc.prototype.onload = null; 

	Inc.prototype.onerror = null; 

	Inc.prototype.init = function(){
		this.options.handler.onload = this.onload;
		this.options.handler.onerror = this.onerror;
		this.load(this.options.sources[0]);
	};

	Inc.prototype.require = function(src){
		this.options.sources.push(src);
	};

	Inc.prototype.load = function(src){

		var self = this,
			script = this.createScriptElement(src);

		script.onload = function(event){
			self.options.current ++;
			if(!self.options.error && self.options.current < self.options.sources.length){
				self.load(self.options.sources[self.options.current]);
			}
			if(!self.options.error && self.options.current === self.options.sources.length && typeof self.options.handler['onload'] === 'function'){
				self.options.handler['onload'].call(script, self.options.sources);
			}
		};

		script.onerror = function(error){
			self.options.error = true;
			if(typeof self.options.handler['onerror'] === 'function')
				self.options.handler['onerror'].call(script, error);
		};

		document.head.appendChild(script);
	};

	Inc.prototype.createScriptElement = function(url){
		var script = document.createElement('script');
		script.src = (url.substr(-3).toLowerCase() === '.js') ? url : url + '.js';
		script.type = 'application/javascript';
		return script;
	};

	window.Inc = Inc;

})(window);