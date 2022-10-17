import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function CategoriesInDb() {
  const [categorias, setCategorias] = useState();

    const getCategorias =  async () => {
        const json = await axios("http://localhost:3001/api/products");//pego a mi api
        
        setCategorias(json.data.countByCategory);
      }
    

  
      useEffect(() => {
        if(!categorias){
          getCategorias()
        }
        console.log(categorias) 
        console.log('hola')
    }, [categorias]);

  return (
   
     <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
          Categorias
          </h5>
        </div>

      {  categorias && categorias? 
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <Link to='/Sensoriales'>
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Sensoriales: {categorias.sensoriales} u.</div>
              </div>
              </Link>
            </div>
            <div className="col-lg-6 mb-4">
            <Link to='/Musicales'>
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Musicales: {categorias.musicales} u.</div>
              </div>
              </Link>
            </div>
            <div className="col-lg-6 mb-4">
            <Link to='/Ingenio'>
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Ingenio: {categorias.ingenio} u.</div>
              </div>
              </Link>
            </div>
            <div className="col-lg-6 mb-4">
            <Link to='/Movimientos'>
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Movimiento: {categorias.movimientos} u.</div>
              </div>
              </Link>
            </div>
            
          </div>
        </div>
       :null }
      </div>
    </div>
  );
}

export default CategoriesInDb;