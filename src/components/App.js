import React from 'react';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastToyInDb from './LastToyInDb';
import ContentRowDataCards from './ContentRowDataCards';
import NotFound from './NotFound';
import SideBar from './SideBar';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import SearchToys from './SearchToys';
import '.././assets/css/app.css'

function App() {
  return (
    <div id="wrapper">
     
     <BrowserRouter>   
     <SideBar /> 
          <Routes>
            <Route exact path="/"  element={<ContentWrapper />}></Route>
            <Route path="/ProductsInDb" element={<CategoriesInDb />}></Route>
            <Route path="/CategoriesInDb" element={<CategoriesInDb />}></Route>
            <Route path="/LastMovieInDb" element={<LastToyInDb />}></Route>
            <Route path="/ContentRowDataCards" element={<ContentRowDataCards />}></Route>
            <Route path="/SearchResults" element={<SearchToys/>}></Route>
            <Route path='*' element={NotFound} />
            
          </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
