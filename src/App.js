import './App.css';
import NavBar from './components/SearchBar/Navbar';
import { useState, useCallback } from 'react';
import Spotify from './components/Utils/spotify';
import {ThemeProvider} from 'styled-components';
import SearchResults from './components/Results/SearchResults';
import PlaylistContainer from './components/Playlist/PlaylistContainer';
import MyPlaylist from './components/Playlist/MyPlaylist';

const theme = {
  colors: {
      black: '#181713',
      darkBrown: '#E43D12',
      medBrown: '#FF7C15',
      lightBrown: '#FF933D',
      lightGrey: '#EBE9E1',
      lightestBrown: '#FFAE6E',
      white: '#F6F6F6',
      lightCream: '#F6F5F2',
      medCream: '#F3F2EE',
      darkCream: '#F0EFE8',
      lightestPink: '#F6A9BE',
      lightPink: '#F38CA9',
      medPink: '#F17496',
      darkPink: '#ED4672',
      yellow: '#FFB400',
      pink: '#e4024a',
      purple: 'rgb(67, 41, 45)',
      borderRadius: '10px',
      border: '4px solid var(--pink)',
      boxShadow: '5px 0px 7px 6px var(--lightGrey)'
  }
}

function App() {
  const [results, setResults] = useState([]);
  const [albumInfo, setAlbumInfo] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistAlbums, setPlaylistAlbums] = useState([]);

  const searchAlbums = useCallback((album) => {
    Spotify.search(album).then(result => {
      setResults(result);
    })
  }, [])  
  const getAlbumInfo = useCallback((albumId) => {
    Spotify.singleAlbum(albumId).then(result => {
      setAlbumInfo(result);
    })
  } , []);

  const savePlaylist = useCallback((name, trackUris) => { 
    Spotify.savePlaylist(name, trackUris).then(() => {
      setPlaylistAlbums([]);
  })}, []);


  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <NavBar searchAlbums={searchAlbums} />
      <SearchResults albums={results} getAlbumInfo={getAlbumInfo} />
      <PlaylistContainer albumInfo={albumInfo} />
      <MyPlaylist setPlaylistName={setPlaylistName} playlistName={playlistName} playlistAlbums={playlistAlbums} savePlaylist={savePlaylist} />
    </ThemeProvider>
    </div>
  );
}

export default App;
