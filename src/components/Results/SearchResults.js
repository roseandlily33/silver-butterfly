import { EachResult, SearchResultsContainer } from "./SearchResults.styles";

const SearchResults = ({albums, getAlbumInfo}) => {
    
    return ( 
        <>
        <SearchResultsContainer>
        {albums ? albums?.map((album) => (
        <EachResult key={album?.id}>
        <img src={album?.images[2].url} alt={album?.url}/>
        <p>{album?.name}</p>
        <button onClick={() => {getAlbumInfo(album?.id)}}>See Tracks</button>
        </EachResult>
        )
        ): <p>No albums to display</p>}
        </SearchResultsContainer>
        </>
     );
}
 
export default SearchResults;