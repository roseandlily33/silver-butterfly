import { EachSongContainer } from "./Tracklist.styles";

const Tracklist = ({song, setPlaylistAlbums}) => {
    const addToPlaylist = (song) => {
        const songInfo = {
            uri: song.uri,
            name: song.name
        };
        setPlaylistAlbums((prev) => [...prev, songInfo]);
        console.log('ADDING SONG', song)
    }
    return (
        <EachSongContainer key={song.uri}>
                    <div className="songLeft">
                    <h3 className="discFont">{song.track_number}</h3>
                    {song?.name.length < 20 ? <p>{song.name}</p> : <p>{song.name.slice(0,20)}</p>}
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