import { useState } from "react";
import { NavContainer } from "./Navbar.styles";

const NavBar = ({searchAlbums}) => {
    const [searchInput, setSearchInput] = useState('');
   
    return (
    <>
     <NavContainer>
        <h1>Jammin</h1>
        <div>
        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
        <button onClick={(e)=> {
            e.preventDefault();
            console.log('Searching for', searchInput);
            searchAlbums(searchInput);
        }}>Search</button>
        </div>
    </NavContainer> 
    </>
    );
}
 
export default NavBar;