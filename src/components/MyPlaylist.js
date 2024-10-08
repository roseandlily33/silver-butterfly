import { MyPlaylistContainer } from "./MyPlaylist.styles";
const MyPlaylist = ({playlistAlbums, setPlaylistAlbums}) => {
    console.log('PLAYLIST ALBUMS', playlistAlbums)
    return ( 
        <MyPlaylistContainer>
            <h3>My Playlist</h3>
            {playlistAlbums?.map((song) => {
                return <p>{song.name}</p>
            })}
        </MyPlaylistContainer>
     );
}
 
export default MyPlaylist;