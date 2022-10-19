import React from 'react';


function ChartOrderRow(props){
  
    return (
                <tr>
                    <td>{props.Id}</td>  
                    <td>{props.Nombre}</td>
                    <td>{props.Telefono}</td>
                    <td>{props.Email}</td>
                    <td>{props.Direccion}</td>
                   
                </tr>
            )
    }
    
        

export default ChartOrderRow;