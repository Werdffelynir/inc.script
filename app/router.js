
(function(app){

	ob = app.router;

	ob.path = function(){};
	ob.domain = function(){};
	ob.some = function(){};
	ob.error404 = function(){};

	ob.request = function(link){

		var title = "#" + link,
			data = app.model.data[link] ? app.model.data[link] : app.model.data['error404'];

		if (link === 'home')
			title = window.location.hash = '';

		history.pushState({title:document.title, content:app.getContent()}, data.title, title);

		document.title = data.title;
		app.setContent(data.content);
		
	};

})(app);
