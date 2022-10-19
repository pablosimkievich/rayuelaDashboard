import React from 'react';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastToyInDb from './LastToyInDb';
import ContentRowDataCards from './ContentRowDataCards';
import NotFound from './NotFound';
import SideBar from './SideBar';
import Orders from './ordersTable/Orders';
import Products from './productTables/Products';
import Sensoriales from './productTables/Sensoriales';
import Movimientos from "./productTables/Movimientos";
import Musicales from "./productTables/Musicales";
import Ingenio from './productTables/Ingenio';
import Users from './usersTable/Users';
import Reviews from './reviewsTable/Reviews';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import SearchToys from './SearchToys';
import '.././assets/css/app.css';
import '.././assets/css/products-styles.css';





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
            <Route path="/Reviews/:id" element={<Reviews />}></Route>
            <Route path="/CategoriesInDb" element={<CategoriesInDb />}></Route>
            <Route path="/Orders" element={<Orders />}></Route>
            <Route path="/Users" element={<Users />}></Route>
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
