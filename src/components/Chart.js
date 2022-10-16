import React from 'react';
import ChartRow from './ChartRow';
import {useState, useEffect} from 'react';
import axios from 'axios';




function Chart (){
    const [data, setData] = useState([]);
    const products =  async () => {
        const json = await axios("http://localhost:3001/api/products");//pego a mi api
            {/* console.log(json) */}
        setData(json.data.products);};

        useEffect(() => {
            products();
            console.log(data)
        }, [setData]);

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
                                    

                            data.map( ( e , i) => {
                                let row = {
                                    Id: e.id, 
                                    Name: e.name, 
                                    Img: e.img,
                                    Price: e.price,
                                    Rating: e.ratings.length>0?e.ratings.reduce((pv,cv)=> pv + cv)/e.ratings.length: "No reviews",
                                    Age: e.age, 
                                    Categories: e.category,
                                    Description: e.description,
                                    Edit: `http://localhost:3001/edit/${e.id}`
                                }
                                console.log(data)
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

export default Chart;