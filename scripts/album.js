var albumAcidRap = {
  title: 'Acid Rap',
  artist: 'Chance The Rapper',
  label: 'Independent',
  year: '2013',
  albumArtUrl: 'assets/images/album_covers/acid.jpg',
  songs: [
    { title: 'Good Ass Intro (feat. BJ The Chicago Kid, Lili K & Kiara Lanier)', duration: '3:59' },
    { title: 'Pusha Man (feat. Nate Fox & Lili K)', duration: '7:24' },
    { title: 'Cocoa Butter Kisses (feat. Vic Mensa & Twista)', duration: '5:07' },
    { title: 'Juice', duration: '3:35'},
    { title: 'Lost (feat. Noname Gypsy)', duration: '3:05'},
    { title: 'Everybody\'s Something (feat. Saba & BJ The Chicago Kid)', duration: '4:37'},
    { title: 'Interlude (That\'s Love)', duration: '2:30'},
    { title: 'Favorite Song (feat. Childish Gambino)', duration: '3:05'},
    { title: 'NaNa (feat. Action Bronson)', duration: '3:21'},
    { title: 'Smoke Again (feat. Ab-Soul)', duration: '4:33'},
    { title: 'Acid Rain', duration: '3:36'},
    { title: 'Chain Smoker', duration: '3:31'},
    { title: 'Everything\'s Good (Good Ass Outro)', duration: '5:33'}
  ]
};

var album10days = {
  title: '10 Days',
  artist: 'Chance The Rapper',
  label: 'Independent',
  year: '2013',
  albumArtUrl: 'assets/images/album_covers/acid.jpg',
  songs: [
    { title: 'Good Ass Intro (feat. BJ The Chicago Kid, Lili K & Kiara Lanier)', duration: '3:59' },
    { title: 'Pusha Man (feat. Nate Fox & Lili K)', duration: '7:24' },
    { title: 'Cocoa Butter Kisses (feat. Vic Mensa & Twista)', duration: '5:07' },
    { title: 'Juice', duration: '3:35'},
    { title: 'Lost (feat. Noname Gypsy)', duration: '3:05'},
    { title: 'Everybody\'s Something (feat. Saba & BJ The Chicago Kid)', duration: '4:37'},
    { title: 'Interlude (That\'s Love)', duration: '2:30'},
    { title: 'Favorite Song (feat. Childish Gambino)', duration: '3:05'},
    { title: 'NaNa (feat. Action Bronson)', duration: '3:21'},
    { title: 'Smoke Again (feat. Ab-Soul)', duration: '4:33'},
    { title: 'Acid Rain', duration: '3:36'},
    { title: 'Chain Smoker', duration: '3:31'},
    { title: 'Everything\'s Good (Good Ass Outro)', duration: '5:33'}
  ]
};

var createSongRow = function(songNumber, songName, songLength) {
  var template =
    '<tr class="album-view-song-item">'
  + '<td class="song-item-number">' + songNumber + '</td>'
  + '<td class="song-item-title">' + songName + '</td>'
  + '<td class="song-item-duration">' + songLength + '</td>'
  + '</tr>'
  ;

  return template;
};

var setCurrentAlbum = function(album) {
  var albumTitle = document.getElementsByClassName('album-view-title')[0];
  var albumArtist = document.getElementsByClassName('album-view-artist')[0];
  var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
  var albumImage = document.getElementsByClassName('album-cover-art')[0];
  var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);

  albumSongList.innerHTML = '';

  for (var i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  }
};

window.onload = function() {
  setCurrentAlbum(albumAcidRap);
};