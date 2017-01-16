window.onload = function() {
	var getPhotosButton = document.getElementById('get__images');

	var BANNED = [1433035400];

	var feed = new Instafeed({
	    get: 'tagged',
	    tagName: 'almatyarch',
	    limit: 60,
	    resolution: 'standard_resolution',
	    clientId: '50abeaa6b79b48dda83d519567ba4db3',
	    template: '<a target="_blank" class="image__link" href="{{link}}"><div class="image" style="background-image: url({{image}})"></div></a>',
	    filter: function(image) {
				return !image.user.id.indexOf(BANNED) <= 0;
	    },
	    after: function() {
		    if (!this.hasNext()) {
		      getPhotosButton.setAttribute('disabled', 'disabled');
		    } else {
					getPhotosButton.style.display = 'block';
		    }
	    }
	});
	
	getPhotosButton.addEventListener('click', function() {
		getPhotosButton.style.display = 'none';
		feed.next();
	});
	
	feed.run();
	
}