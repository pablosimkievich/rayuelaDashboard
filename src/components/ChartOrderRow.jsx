import React from 'react';


function ChartOrderRow(info){
  
    return (
                <tr>
                    <td>{info.Id}</td>
                    <td>{info.Cliente}</td>
                    <td>{info.Fecha}</td>
                    <td>{info.Estado}</td>
                    <td>{info.Total}</td>
                    <td>{info.MPago}</td>
                </tr>
            )
    }
    
        

export default ChartOrderRow;