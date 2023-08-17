import { useEffect, useState } from "react";
import MyPlaylist from "./MyPlaylist";

const PlaylistContainer = ({albumId, accessToken}) => {
    const [albumInfo, setAlbumInfo] = useState('');
    useEffect(() => {
        if(albumId && accessToken){
              fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            })
            .then(res => res.json())
            .then(data => {setAlbumInfo(data.items)})
            .catch(e => console.error(e));
            }
    }, [albumId, accessToken]);
    
    return ( 
        <div className="mainContent"> 
        <div className="playlistCont">
            <div className="playlistResults">
               {albumInfo ?  albumInfo.map(song => (
                <div className="eachSong" key={song.uri}>
                    <div className="songLeft">
                    <h1>{song.track_number}</h1>
                    <h3>{song.name}</h3>
                    </div>
                    <div className="songRight">
                    <button>Add To Playlist</button>
                    </div>
                </div>
               )): <h3>Select an album or put in an artist</h3>}
            </div>
        </div>
        <MyPlaylist />
        </div>
     );
}
 
export default PlaylistContainer;