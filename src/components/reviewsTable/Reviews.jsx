import React from 'react';
import ReviewsTableRow from './ReviewsTableRow'
import ReviewsTableHead from './ReviewsTableHead';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


function Reviews( ){

    const {id} =  useParams();
   

    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);


    const getProducts =  async () => {
        const json = await axios("http://localhost:3001/api/products");//pego a mi api
        const product1 = json.data.products.find(product => product.id === parseInt(id))
        setProducts(product1);
        }
     
    const usersInfo =  async () => {
            const json = await axios("http://localhost:3001/api/users");//pego a mi api
              
                setUsers(json.data.users);};
        
        
 useEffect(() => {
            getProducts();
            usersInfo();
         
        }, [setProducts, setUsers]);
        
       


    return (
     
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                <div className="col-12">
							<h2>Reviews de Juguete: </h2>
						</div>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                           <ReviewsTableHead/>
                        </thead>
                
                        <tbody>
                             {
     
                         products.reviews?.map( ( e , i) => {
                            let user = users.find(el=>el.id === e.userr_fk_id)
                                let row = {
                                    Id: e.id,
                                    User: user.name,
                                    Rating: e.rating,
                                    Title: e.review_title,
                                    Review: e.review                                  
                                }
                               
                                return <ReviewsTableRow {
                                    ...row} key={i}/>
                            })
                            }
                            
                        </tbody>

                        <tfoot>
                            <ReviewsTableHead/>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )

   
}

export default Reviews;