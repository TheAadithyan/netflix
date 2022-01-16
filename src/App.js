import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import { action, originals } from './urls'
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Banner />
        <RowPost url={originals} title="Netflix Originals"/>
        <RowPost url={action} title="Action" isSmall />
      </header>
    </div>
  );
}

export default App;
