import { MainContent, PlaylistContainerScroll} from "./PlaylistContainer.styles";
import Tracklist from "../Tracklist/Tracklist";

// Left Container - Displays the songs from one album
const PlaylistContainer = ({albumInfo, setPlaylistAlbums, albumName}) => {
    console.log('Album info', albumInfo)
   
    return ( 
        <MainContent> 
           {albumName &&  <h4>{albumName}</h4>}
           <br/>
            <PlaylistContainerScroll>
               {albumInfo &&  albumInfo?.map(song => (
                    <Tracklist song={song} setPlaylistAlbums={setPlaylistAlbums}/>
               ))}
            </PlaylistContainerScroll>
        </MainContent>
     );
}
 
export default PlaylistContainer;