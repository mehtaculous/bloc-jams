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

var albumControlSystem = {
  title: 'Control System',
  artist: 'Ab-Soul',
  label: 'Top Dawg Entertainment',
  year: '2012',
  albumArtUrl: 'assets/images/album_covers/control.jpg',
  songs: [
    { title: 'Soulo Ho3 (feat. Jhené Aiko)', duration: '3:57' },
    { title: 'Track Two', duration: '4:03' },
    { title: 'Bohemian Grove', duration: '4:23' },
    { title: 'Terrorist Threats (feat. Jhené Aiko & Danny Brown)', duration: '4:24'},
    { title: 'Pineal Gland', duration: '3:52'},
    { title: 'Double Standards', duration: '4:21'},
    { title: 'Mixed Emotions', duration: '4:08'},
    { title: 'SOPA (feat. Schoolboy Q)', duration: '4:09'},
    { title: 'Lust Demons (feat. Jay Rock & BJ the Chicago Kid)', duration: '3:41'},
    { title: 'ILLuminate (feat. Kendrick Lamar)', duration: '5:07'},
    { title: 'A Rebellion (feat. Alori Joh)', duration: '3:48'},
    { title: 'Showin\' Love', duration: '4:57'},
    { title: 'Empathy (feat. Alori Joh & JaVonte)', duration: '3:01'},
    { title: 'Nothing\'s Something', duration: '2:30'},
    { title: 'Beautiful Death (feat. Punch & Ashtrobot)', duration: '4:30'},
    { title: 'The Book of Soul', duration: '5:11'},
    { title: 'Black Lip Bastard (Remix) (feat. Black Hippy)', duration: '5:49'}
  ]
};

var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [
    { title: 'Hello, Operator?', duration: '1:01' },
    { title: 'Ring, ring, ring', duration: '5:01' },
    { title: 'Fits in your pocket', duration: '3:21'},
    { title: 'Can you hear me now?', duration: '3:14' },
    { title: 'Wrong phone number', duration: '2:15'}
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

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {
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
  
  var albums = [albumAcidRap, albumControlSystem, albumMarconi]
  var index = 1;
  albumImage.addEventListener('click', function(event) {
    setCurrentAlbum(albums[index]);
    index++;
    if (index == albums.length) {
      index = 0;
    }
  });
};