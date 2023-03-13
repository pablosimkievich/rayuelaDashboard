import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function LastToyInDb(){

	const [juguetes, setJuguetes] = useState([]);

    const products =  async () => {
        const json = await axios("https://rayuela.onrender.com/api/products");//pego a mi api
        console.log(json)
        setJuguetes(json.data.products);}


	useEffect(() => {
            products();
      
     //   console.log(juguetes)
	 }, [setJuguetes]);


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo juguete en DB</h5>
                </div>
          {     juguetes && juguetes[juguetes.length-1]?
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={juguetes[juguetes.length-1].img} alt={juguetes[juguetes.length-1].name}/>
                    </div>
                    <p>{juguetes[juguetes.length-1].name}</p>
                    <p>{juguetes[juguetes.length-1].description}</p>
                    <a className="btn btn-danger" href={`https://rayuela.onrender.com/juguetes/${juguetes[juguetes.length-1].id}`} target="_blank" rel='noreferrer'>View detail</a>
                </div>
                :null
            }
   

            </div>
        </div>
    )
}

export default LastToyInDb;
