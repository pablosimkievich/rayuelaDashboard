import React from 'react';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastToyInDb from './LastToyInDb';
import ContentRowDataCards from './ContentRowDataCards';
import NotFound from './NotFound';
import SideBar from './SideBar';
import Orders from './Orders';
import Products from './Products';
import Sensoriales from './Sensoriales';
import Movimientos from './Movimientos';
import Musicales from './Musicales';
import Ingenio from './Ingenio';
import Edad1 from './Edad1';
import Edad2 from './Edad2';
import Edad3 from './Edad3';
import Edad4 from './Edad4';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import SearchToys from './SearchToys';
import '.././assets/css/app.css';
import '.././assets/css/products-styles.css'





function App() {
  return (
  
    <div id="wrapper">
     
     <BrowserRouter>   
     <SideBar /> 
          <Routes>
            <Route exact path="/"  element={<ContentWrapper />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/Sensoriales" element={<Sensoriales />}></Route>
            <Route path="/Movimientos" element={<Movimientos />}></Route>
            <Route path="/Musicales" element={<Musicales />}></Route>
            <Route path="/Ingenio" element={<Ingenio />}></Route>
            <Route path='/Ages1' element={<Edad1 />}></Route>
            <Route path='/Ages2' element={<Edad2 />}></Route>
            <Route path='/Ages3' element={<Edad3 />}></Route>
            <Route path='/Ages4' element={<Edad4 />}></Route>
            <Route path="/CategoriesInDb" element={<CategoriesInDb />}></Route>
            <Route path="/Orders" element={<Orders />}></Route>
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
