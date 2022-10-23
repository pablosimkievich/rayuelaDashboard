import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import SalesRow from './SalesRow';


function SalesCard(){
    const [sales, setSales] = useState([]);
const salesApi =  async () => {
    const json = await axios("http://localhost:3001/api/sales");//pego a mi api
        
        setSales(json.data.productOrders);};

    useEffect(() => {
        salesApi();
        console.log(sales)
   
    }, [setSales]);

   let uVendidas = sales.map(e=>{return e.unidadesVendidasXProducto}).length? sales.map(e=>{return e.unidadesVendidasXProducto}).reduce((pv,cv)=> pv +cv): 0;
   console.log(uVendidas)

        return(
                <div className="col-md-4 mb-4">
                        <div className={`card border-left-success shadow h-100 py-2`}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className={`text-xs font-weight-bold text-success text-uppercase mb-1`}> Unidades vendidas</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{`${uVendidas}`}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-clipboard-list fa-2x text-gray-600"></i>
                                    </div>
                                </div>
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                        <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Juguete</th>
                                                        <th>Unidades Vendidas</th>
                                                    </tr>
                                        
                                        </thead>
                                                    
                                    
                                   <tbody>
                                   { sales.map( (element , i) => {
                                        let salesRow = {
                                            Id: element.id,
                                            Name: element.productName,
                                            UnidadesVendidasXJuguete: element.unidadesVendidasXProducto
                                            
                                        }
                                      
                                        return <SalesRow {
                                            ...salesRow} key={i}/>
                                    })}
                                       </tbody> 
                                                    
                                    

                                    
                                    </table>
                            </div>
                        </div>
                </div>
    )
}

export default SalesCard;
