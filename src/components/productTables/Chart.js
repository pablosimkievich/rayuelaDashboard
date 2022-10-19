import React from 'react';
import ChartRow from './ChartRow';
import ProductTableHead from './ProductTableHead';
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
                <div className="col-12">
							<h2>Juguetes</h2>
						</div>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                           <ProductTableHead />
                        </thead>
                        
                        <tbody>
                             {
                                    

                            data.map( ( e , i) => {
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
                                console.log(data)
                                return <ChartRow {
                                    ...row} key={i}/>
                            })
                            }
                            
                        </tbody>

                        <tfoot>
                            <ProductTableHead />
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;