import React from 'react';


function ReviewTableRow(props){
  
    return (
                <tr>
                    <td>{props.Id}</td>
                    <td>{props.User}</td>
                    <td>{props.Rating}</td>
                    <td>{props.Title}</td>
                    <td>{props.Review}</td>
                    
                </tr>
            )
    }
    
        

export default ReviewTableRow;