import PlaylistContainer from "./PlaylistContainer";
import { useState } from "react";

const SearchResults = ({albums, accessToken}) => {
    const [albumId, setAlbumId] = useState('');
    
    return ( 
        <div>
        <div className="searchResultsCont">
        {albums ? albums.map((album) => (
        <div className="eachResult" key={album.id}>
        <img src={album.images[2].url} alt={album.url}/>
        <p>{album.name}</p>
        <button onClick={() => {setAlbumId(album.id); console.log('ALUBM ID', album.id)}}>See Tracks</button>
        </div>)
        ): <h1>No albums to display</h1>}
        </div>
        <PlaylistContainer albumId={albumId} accessToken={accessToken}/>
        </div>
       
     );
}
 
export default SearchResults;