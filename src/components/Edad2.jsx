import React from 'react';
import ChartRow from './ChartRow';
import axios from 'axios';
import {useEffect, useState} from 'react';

function Edad2 (){
    const [dataAges2, setDataAges2] = useState([]);
    const products =  async () => {
        const json = await axios("http://localhost:3001/api/products");//pego a mi api
            {/* console.log(json) */}
            setDataAges2 (json.data.juguetesXEdad.ages2);
        }

        useEffect(() => {
            products();
            console.log(dataAges2)
        }, [setDataAges2]);
			

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
                                    

                                dataAges2.map( ( e , i) => {
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
                                    Edit: `http://localhost:3001/edit/${e.id}`
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

export default Edad2;