import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import '../assets/css/products-styles.css'

function Products(){
	
const [toys, setToys] = useState([]);

const getToys =  async () => {
	const json = await axios("http://localhost:3001/api/products");
		setToys(json.data.products);};

	
	useEffect(() => {
         
			getToys();
		 
			
           
console.log(toys)
    }, [toys]);



    return (
	
			<article className="containerProduct">
				{
				toys && toys?.map((e, i) =>{
						return(
				<div clas Name="producto" key={i}>
					<a href={e.detail} target="_blank" rel="noreferrer">
						<img src={e.img} alt="juguete" className="producto-image"/>
						<h3> {e.name} </h3>
					</a>
				
					<p>{e.price} </p>
					<a href={`http://localhost:3001/edit/${e.id}`} rel="noreferrer" target='_blank'>
					<button type="submit" className="add-to-cart-button">
					EDITAR<i className="fa-solid fa-bag-shopping"></i>
					</button>
					</a>
				</div>
						)})
				}
			</article>
	)			
				

}
					
				
		
	
		
    	

	

export default Products;