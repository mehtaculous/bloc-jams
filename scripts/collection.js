var collectionItemTemplate =
    '<div class="collection-album-container column fourth">'
  + '  <img src="assets/images/album_covers/acid.jpg"/>'
  + '  <div class="collection-album-info caption">'
  + '    <p>'
  + '      <a class="album-name" href="/album.html">Acid Rap</a>'
  + '      <br/>'
  + '      <a href="/album.html">Chance The Rapper</a>'
  + '      <br/>'
  + '      13 songs'
  + '      <br/>'
  + '    </p>'
  + '  </div>'
  + '</div>'
  ;

window.onload = function() {
  var collectionContainer = document.getElementsByClassName('album-covers')[0];
  collectionContainer.innerHTML = '';

  for (var i = 0; i < 12; i++) {
    collectionContainer.innerHTML += collectionItemTemplate;
  }
}