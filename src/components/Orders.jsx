import React from 'react';
import ChartOrderRow from './ChartRow';
import {useState, useEffect} from 'react';
import axios from 'axios';




function Orders (){
    const [ordersData, setOrderData] = useState([]);
    const ordersApi =  async () => {
        const json = await axios("http://localhost:3001/api/orders");//pego a mi api
            console.log(json.data)
            setOrderData(json.data.orders);};

        useEffect(() => {
            ordersApi();
       
        }, [setOrderData]);

        

    return (
     
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Cliente</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th>Total</th>
                                <th>Metodo de Pago</th>
                            </tr>
                        </thead>
                      
                        <tbody>
                    {/*     {
                            ordersData.map( ( element , i) => {
                                let orderRow = {
                                    Id: element.id,
                                    Cliente: element.users.user_first_name + ' ' +element.users.user_last_name, 
                                    Fecha: element.order_date,
                                    Estado: element.order_status,
                                    Total: element.order_total_amt, 
                                    MPago: element.pay_method_id,
                                }
                                console.log(orderRow)
                                return <ChartOrderRow {
                                    ...orderRow} key={i}/>
                            })
                            }
                             */}  
                        </tbody>

                        <tfoot>
                            <tr>
                                <th>id</th>
                                <th>Cliente</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th>Total</th>
                                <th>Metodo de Pago</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Orders;