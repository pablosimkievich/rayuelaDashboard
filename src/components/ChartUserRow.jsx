import React from 'react';


function ChartUserRow(info){
  
    return (
                <tr>
                    <td>{info.Id}</td>
                    <td>
                        <a href={`${info.URLCliente}`} target="_blank" rel='noreferrer'>{info.Cliente}</a>
                        </td>
                    <td>{info.Fecha}</td>
                    <td>{info.Estado}</td>
                    <td>{info.Total}</td>
                    <td>{info.MPago}</td>
                    <td>
                        <a href={`${info.Detalle}`}  target="_blank" rel='noreferrer'>
                            <button>View</button>
                            </a>
                      </td>
                </tr>
            )
    }
    
        

export default ChartUserRow;