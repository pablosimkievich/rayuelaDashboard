import React from 'react';
import ChartRow from './ChartRow';
import {useState, useEffect} from 'react';
import axios from 'axios';


function Chart (){

    let [listado, setListado] = useState([]);

    const listadoJuguetes = async () => {
        const json = await axios("http://localhost:3001/api/products");
        setListado(json.data.products)
        console.log('holis')
        console.log(json.data.products)
    }

    useEffect(() => {
        if (!listado) {
            listadoJuguetes();
            console.log('hi')
            console.log(listado)  
        }
    }, [ listado ]);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            listado.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;