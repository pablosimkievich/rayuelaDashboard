import React from 'react';


function ReviewTableRow(props){
  
    return (
                <tr>
                    <td>{props.Id}</td>
                    <td>
                        <a href={`http://localhost3001/user/${props.User}`}>{props.User}</a>
                        </td>
                    <td>
                    <div className="stars-outer" >      
                                     <div className="stars-inner" id="starsInner" style={{width: `${props.Rating}%` }}></div>
                                </div> 
                    <p>{props.Rating}</p>
                    </td>
                    <td>{props.Title}</td>
                    <td>{props.Review}</td>
                    
                </tr>
            )
    }
    
        

export default ReviewTableRow;