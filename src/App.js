import './App.css';

import NavBar from './components/Navbar';
import Playlist from './components/Playlist';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='mainContent'>
        <Playlist />
        <SearchResults />
      </div>

    
    </div>
  );
}

export default App;
