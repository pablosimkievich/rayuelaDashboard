import React from 'react';

import {useState, useEffect} from 'react';
import axios from 'axios';

function LastMovieInDb(){

	const [juguetes, setJuguetes] = useState([]);
   
	
	
    const products =  async () => {
        const json = await axios("http://localhost:3001/api/products");//pego a mi api
        
        setJuguetes(json.data.products);//guardo los juguetes en mi state, es un array. data viene en el json x axios
    }

	useEffect(() => {
       console.log(juguetes)
		products();//cuando se monta el componente llamo a mi api
      
	 }, [setJuguetes]);



    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo juguete en DB</h5>
                </div>
{/*
            <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.img} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>lastProduct.description</p>
                    <Link className="btn btn-danger" to={lastProduct.detail} >View detail</Link>
                </div>
                 */}
   

            </div>
        </div>
    )
}

export default LastMovieInDb;
