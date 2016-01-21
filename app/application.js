
(function(app){

	app.construct = function(){
		Array.prototype.slice.call(document.querySelectorAll('.app-link')).forEach(function(item){
			item.onclick = app.linkClick;
		});

		if(window.location.hash) {
			app.router.request(window.location.hash.substr(1));
		}

		window.onpopstate = function(event) {
			if (event.state && event.state.title){
				document.title = event.state.title;
				app.setContent(event.state.content);
			}
		};
	};

	app.linkClick = function(event){
		var link = event.target.getAttribute('data-link');
		app.router.request(link);
	};

	app.setContent = function(html){
		document.querySelector('#content').innerHTML = html;
	};

	app.getContent = function(){
		return document.querySelector('#content').innerHTML;
	};

})(app);
