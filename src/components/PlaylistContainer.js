import { useEffect, useState } from "react";
import MyPlaylist from "./MyPlaylist";
import { MainContent, PlaylistContainerScroll, EachSongContainer } from "./PlaylistContainer.styles";
import Tracklist from "./Tracklist";


const PlaylistContainer = ({albumId, accessToken}) => {
    const [albumInfo, setAlbumInfo] = useState('');
    const [playlistAlbums, setPlaylistAlbums] = useState([]);
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
        <MainContent> 
            <PlaylistContainerScroll>
               {albumInfo &&  albumInfo.map(song => (
                    <Tracklist song={song} setPlaylistAlbums={setPlaylistAlbums}/>
               ))}
            </PlaylistContainerScroll>
        <MyPlaylist playlistAlbums={playlistAlbums} setPlaylistAlbums={setPlaylistAlbums}/>
        </MainContent>
     );
}
 
export default PlaylistContainer;