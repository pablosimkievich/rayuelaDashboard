import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';


function CategoriesInDb() {
  const [categorias, setCategorias] = useState();

    const getCategorias =  async () => {
        const json = await axios("http://localhost:3001/api/products");//pego a mi api
        
        setCategorias(json.data.countByCategory);
      }
    

      useEffect(() => {
        
      
      }, []);

      useEffect(() => {
        getCategorias() 
        console.log(categorias) 
        console.log('hola')
    }, [setCategorias]);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
          Categorias
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Sensoriales:</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Musicales</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Ingenio</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Movimiento</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;