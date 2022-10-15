import React from 'react';



function ChartRow(props){

    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.stock}</td>
                    <td>
                        <ul>
                            {props.listado.map( (listado,i) => 
                                <li key={`listado ${i}`}>{listado}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.Awards}</td>
                </tr>
            )
    }
    
        

export default ChartRow;