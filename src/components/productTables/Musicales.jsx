import React from 'react';
import ChartRow from './ChartRow';
import ProductTableHead from './ProductTableHead';
import axios from 'axios';
import {useEffect, useState} from 'react';

function Musicales(){
    const [dataMusicales, setdataMusicales] = useState([]);
    const products =  async () => {
        const json = await axios("http://localhost:3001/api/products");//pego a mi api
            {/* console.log(json) */}
        setdataMusicales(json.data.juguetesXCategoria.musicales);
        }

        useEffect(() => {
            products();
            console.log(dataMusicales)
        }, [setdataMusicales]);
			

    return (
     
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="col-12">
							<h2>Juguetes Musicales</h2>
						</div>
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                               <ProductTableHead/>
                            </tr>
                        </thead>
                        
                        <tbody>
                             {
                                    

                            dataMusicales.map( ( e , i) => {
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
                                    Edit: `http://localhost:3001/edit/${e.id}`,
                                    Delete: `http://localhost:3001/${e.id}?_method=DELETE`
                                }
                               
                                return <ChartRow {
                                    ...row} key={i}/>
                            })
                            }
                            
                        </tbody>

                        <tfoot>
                            <tr>
                            <ProductTableHead/>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )

   
}

export default Musicales;