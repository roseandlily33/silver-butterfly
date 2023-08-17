import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

const NavBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
        console.log('Getting the access token')
        
        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => res.json())
        .then(data => setAccessToken(data.access_token))
        .catch(e => console.error(e));
    }, [])

    const searchAlbum = async() => {
        console.log('Searching for an album ' + searchInput);
        let artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then(res => res.json())
        .then(data => {return data.artists.items[0].id})
        .catch(e => console.error(e))
        console.log('ARTISTS ID', artistId)
        let albumsReturned = await fetch('https://api.spotify.com/v1/artists/' + artistId +'/albums', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log('ALBUM DATA', data); 
            setAlbums(data.items);})
        .catch(e => console.error(e));
    }
    return (
        <>
     <nav>
        <h1>Jammin</h1>
        <div>
        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
        <button onClick={searchAlbum}>Search</button>
        </div>
    </nav> 
    <SearchResults albums={albums} accessToken={accessToken}/>
    </>
    );
}
 
export default NavBar;