import './App.css';
import Header from './components/Header';
import {Footer} from './components/Footer';
import Recommended from './components/Recommended/Recommended';
import Discover from './components/Discover/Discover'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MoviePage from './components/MoviePage/MoviePage';
import Series from './components/Series/Series';
import SeriesPage from './components/SeriesPage/SeriesPage';
import SearchPage from './components/SearchPage/SearchPage';


function App() {

  return (
    <div className="App">

      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Recommended/>}/>
          <Route path='/movies' element={<Discover/>}/>
          <Route path='/movie/:movieId' element={<MoviePage/>}/>
          <Route path='/series' element={<Series/>}/>
          <Route path='/series/:serieId' element={<SeriesPage/>}/>
          <Route path='/search/:searchId' element={<SearchPage/>}/>
        </Routes>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
