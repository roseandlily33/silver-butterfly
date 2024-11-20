import { MyPlaylistContainer } from "./MyPlaylist.styles";
import { PlaylistContainerScroll } from "./PlaylistContainer.styles";
// Right Container - displays the users tracks and 
// Implement a delete function
const MyPlaylist = ({savePlaylist, status, playlistAlbums, playlistName, setPlaylistName, setPlaylistAlbums}) => {

    const deleteSong =  (song) => {
        const filtered = playlistAlbums.filter((p) => p.id !== song.id);
        setPlaylistAlbums(filtered);
    }

    return ( 
        <MyPlaylistContainer>
            <input type="text" placeholder="My Playlist" value={playlistName} onChange={(e) => setPlaylistName(e.target.value)}></input>
            <p>{status}</p>
            <PlaylistContainerScroll>
            {playlistAlbums?.map((song) => {
                return <div className="playlistSong">
                    <p>{song.name}</p>
                    <button onClick={(e) => {
                        e.preventDefault();
                        deleteSong(song);
                    }}>delete</button>
                </div>
            })}
            </PlaylistContainerScroll>
            <button onClick={(e) => {
                e.preventDefault();
                savePlaylist(playlistName, playlistAlbums);
            }}>Save Playlist</button>
        </MyPlaylistContainer>
     );
}
 
export default MyPlaylist;