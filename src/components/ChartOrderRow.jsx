import React from 'react';


function ChartOrderRow(props){
  
    return (
                <tr>
                    <td>{props.Id}</td>
                    <td>{props.Cliente}</td>
                    <td>{props.Fecha}</td>
                    <td>{props.Estado}</td>
                    <td>{props.Total}</td>
                    <td>{props.MPago}</td>
                </tr>
            )
    }
    
        

export default ChartOrderRow;