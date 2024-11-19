import { useState } from "react";
import { MainContent, PlaylistContainerScroll} from "./PlaylistContainer.styles";
import Tracklist from "../Tracklist/Tracklist";


const PlaylistContainer = ({albumInfo}) => {
    const [playlistAlbums, setPlaylistAlbums] = useState([]);
   
    return ( 
        <MainContent> 
            <PlaylistContainerScroll>
               {albumInfo &&  albumInfo?.map(song => (
                    <Tracklist song={song} setPlaylistAlbums={setPlaylistAlbums}/>
               ))}
            </PlaylistContainerScroll>
        </MainContent>
     );
}
 
export default PlaylistContainer;