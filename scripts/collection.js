var buildCollectionItemTemplate = function(album) {
	var template =
	  '<div class="collection-album-container column fourth">'
	+ '  <img src=' + album.albumArtUrl + '>'
	+ '  <div class="collection-album-info caption">'
	+ '    <p>'
	+ '      <a class="album-name" href="/album.html">' + album.title + '</a>'
	+ '      <br/>'
	+ '      <a href="#">' + album.artist + '</a>'
	+ '      <br/>' + album.songs.length + ' songs<br/>'
	+ '    </p>'
	+ '  </div>'
	+ '</div>'
	;
	
	return $(template);
};

$(window).load(function() {
	var $collectionContainer = $('.album-covers');
	$collectionContainer.empty();

	for (var i = 0; i < albumFixtures.length; i++) {
		var $newThumbnail = buildCollectionItemTemplate(albumFixtures[i]);
		$collectionContainer.append($newThumbnail);
	}
});