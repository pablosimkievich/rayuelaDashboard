import React from 'react';
import UserContext from './User';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastToyInDb from './LastToyInDb';
import ContentRowDataCards from './ContentRowDataCards';
import NotFound from './NotFound';
import SideBar from './SideBar';
import Orders from './Orders'
import Products from './Products'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import SearchToys from './SearchToys';
import '.././assets/css/app.css';
import axios from 'axios'



const products =  async () => {
  const json = await axios("http://localhost:3001/api/products");//pego a mi api
      
   return json.data.products
  };

  const user = products();

function App() {
  return (
    <UserContext.Provider value={user}>
    <div id="wrapper">
     
     <BrowserRouter>   
     <SideBar /> 
          <Routes>
            <Route exact path="/"  element={<ContentWrapper />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/CategoriesInDb" element={<CategoriesInDb />}></Route>
            <Route path="/Orders" element={<Orders />}></Route>
            <Route path="/LastMovieInDb" element={<LastToyInDb />}></Route>
            <Route path="/ContentRowDataCards" element={<ContentRowDataCards />}></Route>
            <Route path="/SearchResults" element={<SearchToys/>}></Route>
            <Route path='*' element={NotFound} />
            
          </Routes>
     </BrowserRouter>
    
    </div>
    </UserContext.Provider>
  );
}

export default App;
