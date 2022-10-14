import React from 'react';
//import noPoster from '../assets/images/no-poster.jpg';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {link} from 'react-router-dom'

function ProductCard(props){
    return (
		<>
			<img src={`/img/products/${props.img}`} alt={`${props.id}`}/>
				<h3>
					{${props.name}}
				</h3>
					<p>
						ID:{${props.id}}
					</p>

						<div className="form-buttons">
								<button type="submit" className="form-button">EDIT</button>
	
								<form action={`localhost:3001/${props.id}?_method=DELETE`} method="POST">
										<button type="submit" className="form-button">DELETE</button>
								</form>
						</div>
		
		</>
	)
			
    	
	};
	

export default ProductCard;