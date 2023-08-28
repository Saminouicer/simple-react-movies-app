import React from 'react';
import './App.css';
import Header from'./components/header'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import WatchList from'./pages/watchList/watchList'
import Watched from'./pages/watched/watched'
import Add from'./pages/add/add'
import Context from'./context/context'
// import Movies from'./pages/movies/movies'

function App() {
return(
  <div>
    <Context>
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<WatchList/>}/>
      <Route path='/watched' element={<Watched/>}/>
      <Route path='/add' element={<Add/>}/>
      {/* <Route path='/movies' element={<Movies/>}/> */}
    </Routes>
    </Router>
    </Context>
    
  </div>
)
  
  
}

export default App;
