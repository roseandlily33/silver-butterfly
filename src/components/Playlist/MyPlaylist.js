import { MyPlaylistContainer } from "./MyPlaylist.styles";

const MyPlaylist = ({savePlaylist, playlistAlbums, playlistName, setPlaylistName}) => {
    console.log('PLAYLIST ALBUMS', playlistAlbums);

    return ( 
        <MyPlaylistContainer>
            <input type="text" placeholder="My Playlist" value={playlistName} onChange={(e) => setPlaylistName(e.target.value)}></input>
            {playlistAlbums?.map((song) => {
                return <p>{song?.name}</p>
            })}
            <button onClick={(e) => {
                e.preventDefault();
                savePlaylist(playlistName, playlistAlbums);
            }}>Save Playlist</button>
        </MyPlaylistContainer>
     );
}
 
export default MyPlaylist;