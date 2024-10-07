import './App.css';
import NavBar from './components/Navbar';

import {ThemeProvider} from 'styled-components';



const theme = {
  colors: {
      black: '#181713',
      darkBrown: '#E43D12',
      medBrown: '#FF7C15',
      lightBrown: '#FF933D',
      lightGrey: '#EBE9E1',
      lightestBrown: '#FFAE6E',
      white: '#F6F6F6',
      lightCream: '#F6F5F2',
      medCream: '#F3F2EE',
      darkCream: '#F0EFE8',
      lightestPink: '#F6A9BE',
      lightPink: '#F38CA9',
      medPink: '#F17496',
      darkPink: '#ED4672',
      yellow: '#FFB400',
      pink: '#e4024a',
      purple: 'rgb(67, 41, 45)',
      borderRadius: '10px',
      border: '4px solid var(--pink)',
      boxShadow: '5px 0px 7px 6px var(--lightGrey)'
  }
}

function App() {

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
    </div>
  );
}

export default App;
