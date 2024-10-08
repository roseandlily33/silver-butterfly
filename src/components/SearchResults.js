import PlaylistContainer from "./PlaylistContainer";
import { useState } from "react";
import { EachResult, SearchResultsContainer } from "./SearchResults.styles";

const SearchResults = ({albums, accessToken}) => {
    const [albumId, setAlbumId] = useState('');
    
    return ( 
        <>
        <SearchResultsContainer>
        {albums ? albums.map((album) => (
        <EachResult key={album.id}>
        <img src={album.images[2].url} alt={album.url}/>
        <p>{album.name}</p>
        <button onClick={() => {setAlbumId(album.id); console.log('ALUBM ID', album.id)}}>See Tracks</button>
        </EachResult>
        )
        ): <p>No albums to display</p>}
        </SearchResultsContainer>
        <PlaylistContainer albumId={albumId} accessToken={accessToken}/>
        </>
       
     );
}
 
export default SearchResults;