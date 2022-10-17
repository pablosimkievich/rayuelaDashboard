import React from 'react';
import ChartUserRow from './ChartUserRow';
import {useState, useEffect} from 'react';
import axios from 'axios';




function Users (){
    const [usersData, setUsersData] = useState([]);
    const usersInfo =  async () => {
        const json = await axios("http://localhost:3001/api/users");//pego a mi api
            console.log(json.data)
            seUusersData(json.data.users);};

        useEffect(() => {
            usersInfo();
       
        }, [setUsersData]);

        

    return (
     
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Mail</th>
                                <th>Direccion</th>
                            </tr>
                        </thead>
                      
                        <tbody>
                        {
                            UsersData.map( ( element , i) => {
                                let orderRow = {
                                    Id: element.id,
                                    URLCliente: `http://localhost:3001/user-detail/${element.users.id}`,
                                    Cliente: element.users.user_first_name + ' ' +element.users.user_last_name, 
                                    Fecha: element.order_date,
                                    Estado: element.order_status,
                                    Total: element.order_total_amt, 
                                    MPago: element.payment_method,
                                    Detalle:  `http://localhost:3001/order-detail/${element.id}`
                                    
                                }
                                console.log(orderRow)
                                return <ChartOrderRow {
                                    ...orderRow} key={i}/>
                            })
                            }
                        
                        </tbody>

                        <tfoot>
                            <tr>
                                <th>id</th>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Mail</th>
                                <th>Direccion</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Orders;