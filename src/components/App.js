import React from 'react';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
import SideBar from './SideBar';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import SearchMovies from './SearchMovies';
import '.././assets/css/app.css'

function App() {
  return (
    <div id="wrapper">
     
     <BrowserRouter>   
     <SideBar /> 
          <Routes>
            <Route exact path="/"  element={<ContentWrapper />}></Route>
            <Route path="/GenresInDb" element={<GenresInDb />}></Route>
            <Route path="/LastMovieInDb" element={<LastMovieInDb />}></Route>
            <Route path="/ContentRowMovies" element={<ContentRowMovies />}></Route>
            <Route path="/SearchResults" element={<SearchMovies/>}></Route>
            <Route path='*' element={NotFound} />
            
          </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
