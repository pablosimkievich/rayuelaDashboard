import React from 'react';
import ChartOrderRow from './ChartOrderRow';
import OrderTableHead from './OrderTableHead';
import {useState, useEffect} from 'react';
import axios from 'axios';




function Orders (){
    const [ordersData, setOrderData] = useState([]);
    const ordersApi =  async () => {
        const json = await axios("https://rayuela.onrender.com/api/orders");//pego a mi api
            console.log(json.data)
            setOrderData(json.data.orders);};

        useEffect(() => {
            ordersApi();
       
        }, [setOrderData]);

        

    return (
     
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="col-12">
							<h2>Ordenes de Compra</h2>
						</div>
                <div className="table-responsive">
                    <table className="table table-bordered" width="100%" cellSpacing="0">
                        <thead>
                         <OrderTableHead/>
                        </thead>
                      
                        <tbody>
                        {
                            ordersData.map( ( element , i) => {
                                let orderRow = {
                                    Id: element.id,
                                    URLCliente: `https://rayuela.onrender.com/user/${element.users.id}`,
                                    Cliente: element.users.user_first_name + ' ' +element.users.user_last_name, 
                                    Fecha: element.order_date,
                                    Total: element.order_total_amt,
                                    Estado: element.order_status, 
                                    MPago: element.payment_method,
                                    Detalle:  `https://rayuela.onrender.com/order-detail/${element.id}`
                                    
                                }
                              
                                return <ChartOrderRow {
                                    ...orderRow} key={i}/>
                            })
                            }
                        
                        </tbody>

                        <tfoot>
                            <OrderTableHead/>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Orders;
