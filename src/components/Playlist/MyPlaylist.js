import { MyPlaylistContainer } from "./MyPlaylist.styles";

// Right Container - displays the users tracks and 
// Implement a delete function
const MyPlaylist = ({savePlaylist, status, playlistAlbums, playlistName, setPlaylistName, setPlaylistAlbums}) => {
    return ( 
        <MyPlaylistContainer>
            <input type="text" placeholder="My Playlist" value={playlistName} onChange={(e) => setPlaylistName(e.target.value)}></input>
            <p>{status}</p>
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