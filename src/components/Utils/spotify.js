const clientId = process.env.REACT_APP_CLIENT_ID; 
const redirectUri = process.env.REACT_APP_REDIRECT_URL; 
let accessToken;


const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },
  async search(album) {
    //console.log('Searching for', album)
    const accessToken = Spotify.getAccessToken();
    // First we get the artists id
    let artistId = await fetch('https://api.spotify.com/v1/search?q=' + album + '&type=artist', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(res => res.json())
    .then(data => {
    return data.artists.items[0].id;
    }).catch(e => console.error(e));
    //console.log('ARTIST ID FOUND', artistId);
    // Then we get the albums for that artist
    return await fetch('https://api.spotify.com/v1/artists/' + artistId +'/albums', {
        method: 'GET',
        headers: {
             Authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
    .then(data => {
      //  console.log('ALBUM DATA', data.items); 
        return data.items;
    })
    .catch(e => console.error(e));
  },
  async singleAlbum(albumId){
    const accessToken = Spotify.getAccessToken();
    try {
      const res = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const data = await res.json();
      //console.log('SINGLE ALBUM', data);
      return data.items;
    } catch (e) {
      return console.error(e);
    }
  },

  savePlaylist(name, trackUris) {
    console.log('Saving playlist')
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(res => res.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(res => res.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  }
};

export default Spotify;
