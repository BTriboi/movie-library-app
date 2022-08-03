import './App.css';
import Header from './components/Header';
import Recommended from './components/Recommended';
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Recommended/>
    </div>
  );
}

export default App;
