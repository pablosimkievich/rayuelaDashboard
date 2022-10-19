import React from 'react';
import ChartOrderRow from './ChartOrderRow';
import OrderTableHead from './OrderTableHead';
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
                                    URLCliente: `http://localhost:3001/user-detail/${element.users.id}`,
                                    Cliente: element.users.user_first_name + ' ' +element.users.user_last_name, 
                                    Fecha: element.order_date,
                                    Total: element.order_total_amt,
                                    Estado: element.order_status, 
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
                            <OrderTableHead/>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Orders;