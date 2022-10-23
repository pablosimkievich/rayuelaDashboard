import React from 'react';


function SalesRow(props){
  
    return (
            <tr>
                <td>{props.Id}</td>
                <td>{props.Name}</td>
                <td>{props.UnidadesVendidasXJuguete}</td>
            </tr>
            )
    }
    
        

export default SalesRow;