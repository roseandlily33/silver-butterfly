import { MainContent, PlaylistContainerScroll} from "./PlaylistContainer.styles";
import Tracklist from "../Tracklist/Tracklist";

// Left Container - Displays the songs from one album
const PlaylistContainer = ({albumInfo, setPlaylistAlbums, albumName, playlistAlbums}) => {
   
    return ( 
        <MainContent> 
           {albumName &&  <h4>{albumName}</h4>}
           <br/>
            <PlaylistContainerScroll>
               {albumInfo &&  albumInfo?.map(song => (
                    <Tracklist song={song} setPlaylistAlbums={setPlaylistAlbums} playlistAlbums={playlistAlbums}/>
               ))}
            </PlaylistContainerScroll>
        </MainContent>
     );
}
 
export default PlaylistContainer;