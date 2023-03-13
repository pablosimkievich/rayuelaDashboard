import React from 'react';
import ChartRow from './ChartRow';
import axios from 'axios';
import {useEffect, useState} from 'react';

function Sensoriales(){
    const [dataSensoriales, setDataSensoriales] = useState([]);
    const products =  async () => {
        const json = await axios("https://rayuela.onrender.com/api/products");//pego a mi api
            {/* console.log(json) */}
        setDataSensoriales(json.data.juguetesXCategoria.sensoriales);
        }

        useEffect(() => {
            products();
            console.log(dataSensoriales)
        }, [setDataSensoriales]);
			

    return (
     
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nombre</th>
                                <th>Imagen</th>
                                <th>Rating</th>
                                <th>Precio</th>
                                <th>Rango edad</th>
                                <th>Categoias</th>
                                <th>Descripcion</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                             {
                                    

                            dataSensoriales.map( ( e , i) => {
                                let row = {
                                    Id: e.id, 
                                    Name: e.name, 
                                    Img: e.img,
                                    Price: e.price,
                                    TotalReviews: e.ratings.length,
                                    Rating: e.ratings.length>0?e.ratings.reduce((pv,cv)=> pv + cv)/e.ratings.length: "No reviews",
                                    Age: e.age, 
                                    Categories: e.category,
                                    Description: e.description,
                                    Edit: `https://rayuela.onrender.com/edit/${e.id}`
                                }
                               
                                return <ChartRow {
                                    ...row} key={i}/>
                            })
                            }
                            
                        </tbody>

                        <tfoot>
                            <tr>
                                <th>id</th>
                                <th>Nombre</th>
                                <th>Imagen</th>
                                <th>Rating</th>
                                <th>Precio</th>
                                <th>Rango Edad</th>
                                <th>Categorias</th>
                                <th>Descripcion</th>
                                <th>Editar</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )

   
}

export default Sensoriales;

					
