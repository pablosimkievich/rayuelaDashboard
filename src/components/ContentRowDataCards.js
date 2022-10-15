import React, {useEffect, useState} from 'react';
import SmallCard from './SmallCard';
import axios from 'axios';


function ContentRowDataCards(){
    const [juguetes, setJuguetes] = useState([]);
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);

    const products =  async () => {
        const json = await axios("http://localhost:3001/api/products");//pego a mi api
            
        setJuguetes(json.data.products);};
    
    const usuarios =  async () => {
        const json = await axios("http://localhost:3001/api/users");//pego a mi api
        
        setUsers(json.data.users);}

    const ventas = async () => {
              const json = await axios("http://localhost:3001/api/orders");//pego a mi api
                setOrders(json.data);
                console.log(json.data)
        }

    useEffect(() => {
            products();
            usuarios();
            ventas();
            
            
        }, [setJuguetes, setUsers, setOrders]);

     let salesInDB = {
        title: 'Total de Ventas',
        color: 'success', 
        cuantity: `$ ${orders.totalSales}`,
        icon: 'fa-clipboard-list'
    }
    
    
    
    let productsInDB = {
        title:'Productos en Data Base', 
        color:'success', 
        cuantity: `${juguetes.length}`,
        icon:'fa-award'
    }
    
    
    
    let usersInDB = {
        title:'Usuarios en Data Base' ,
        color:'success',
        cuantity:`${users.length}`,
        icon:'fa-user-check'
    }
    
    let dataCardProps = [salesInDB, productsInDB, usersInDB];

    return (
    
        <div className="row">
            
            {dataCardProps.map( (element, i) => {

                return <SmallCard {...element} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowDataCards;