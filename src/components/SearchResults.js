import Playlist from "./Playlist";

const SearchResults = ({albums}) => {
    return ( 
        <div className="mainContent">
        <div className="searchResultsCont">
        <h2>Search Results</h2> 
        <div className="mappedResults">
        {albums ? albums.map((album) => (
        <div className="eachResult">
        <img src={album.images[2].url} alt={album.url}/>
        <h4>{album.name}</h4>
        <button uri={album.uri}>Add to Playlist</button>
        </div>)
        ): <h1>No albums to display</h1>}
        </div>
        </div>
        <Playlist />
        </div>
     );
}
 
export default SearchResults;