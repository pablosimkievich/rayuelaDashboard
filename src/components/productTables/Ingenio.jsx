import React from 'react';
import ChartRow from './ChartRow';
import ProductTableHead from './ProductTableHead';
import axios from 'axios';
import {useEffect, useState} from 'react';

function Ingenio(){
    const [dataIngenio, setdataIngenio] = useState([]);
    const products =  async () => {
        const json = await axios ("https://rayuela.onrender.com/api/products");//pego a mi api
            
        setdataIngenio(json.data.juguetesXCategoria.ingenio);
        }

        useEffect(() => {
            products();
            console.log(dataIngenio)
        }, [setdataIngenio]);
			

    return (
     
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                <div className="col-12">
							<h2>Juguetes de Ingenio</h2>
						</div>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                           <ProductTableHead/>
                        </thead>
                        
                        <tbody>
                             {
                                    

                            dataIngenio.map( ( e , i) => {
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
                                    Edit: `https://rayuela.onrender.com/edit/${e.id}`,
                                  
                                }
                               
                                return <ChartRow {
                                    ...row} key={i}/>
                            })
                            }
                            
                        </tbody>

                        <tfoot>
                            <ProductTableHead/>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )

   
}

export default Ingenio;
