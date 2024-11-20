import { EachSongContainer } from "./Tracklist.styles";

const Tracklist = ({song, setPlaylistAlbums, playlistAlbums}) => {
    
    const addToPlaylist = (song) => {
        let check = playlistAlbums.some((s) => s.uri === song.uri);
        if(!check){
            setPlaylistAlbums((prev) => [...prev, song]);
        } else {
            // Alert for now may change to something else later
            alert('Song already added to playlist')
        }
    }

    return (
        <EachSongContainer key={song.uri}>
                    <div className="songLeft">
                    <h3 className="discFont">{song?.track_number}</h3>
                    {song?.name.length < 20 ? <p>{song?.name}</p> : <p>{song?.name.slice(0,20)}</p>}
                    </div>
                    <div className="songRight">
                    <button onClick={(e) =>{
                        e.preventDefault();
                        addToPlaylist(song)
                    }}>Add To Playlist</button>
                    </div>
        </EachSongContainer>
     );
}
 
export default Tracklist;