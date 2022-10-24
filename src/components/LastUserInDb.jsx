import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function LastUserInDb(){

	const [users, setUsers] = useState([]);

    const usersInformation =  async () => {
        const json = await axios("http://localhost:3001/api/users");//pego a mi api
      
        setUsers(json.data.users);}


	useEffect(() => {
            usersInformation();
 
	 }, [setUsers]);


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Usuario en DB</h5>
                </div>
          {     users && users[users.length-1]?
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={users[users.length-1].img} alt="ultimo usuario"/>
                    </div>
                    <p>{users[users.length-1].name}</p>
                    <p>{users[users.length-1].id}</p>
                    <Link className="btn btn-danger" to={users[users.length-1].id} >View detail</Link>
                </div>
                :null
            }
   

            </div>
        </div>
    )
}

export default LastUserInDb;
