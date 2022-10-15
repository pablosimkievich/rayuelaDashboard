import React from 'react';




function ChartRow(props){
  
    return (
                <tr>
                    <td>{props.Id}</td>
                    <td><a href={`http://localhost:3001/juguetes/${props.Id}`} target="_blank" rel='noreferrer'>{props.Name}</a></td>
                    <td>
                        <img src={`${props.Img}`}  alt='juguete' className='chart-img'/>
                        </td>
                    <td>{props.Price} $</td>
                    <td>{props.Age}</td>
                    <td>{props.Categories}</td>
                    <td>{props.Description}</td>
                    <td>
                        <a href={`${props.Edit}`}  target="_blank" rel='noreferrer'>
                            <button>EDIT</button>
                            </a>
                        </td>
                </tr>
            )
    }
    
        

export default ChartRow;