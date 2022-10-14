import React from 'react';
//import noPoster from '../assets/images/no-poster.jpg';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {link} from 'react-router-dom'

function ProductCard(props){
    return (
		<>
			  <article class="producto">
                <a href="/juguetes/<%= e.id %>">
                    <img src="/img/products/<%= e.principal_img %>" alt="banco">
                    <h3> {props.name} </h3>
                </a>
                <p>$  <%= e.price %> </p>
                
                <input value="<%=e.id%>" class='input-carrito' style="display:none;"><button type="submit" class="add-to-cart-button">AGREGAR AL CARRITO<i class="fa-solid fa-bag-shopping"></i></button></input>
                
            </article>
		
		</>
	)
			
    	
	};
	

export default ProductCard;