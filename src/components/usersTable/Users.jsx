import React from 'react';
import UserChartRow from './UserChartRow';
import UserTableHead from './UserTableHead';
import {useState, useEffect} from 'react';
import axios from 'axios';




function Users (){
    const [usersData, setUsersData] = useState([]);
    const usersInfo =  async () => {
        const json = await axios("http://localhost:3001/api/users");//pego a mi api
            console.log(json.data)
            setUsersData(json.data.users);};

        useEffect(() => {
            usersInfo();
       
        }, [setUsersData]);

        

    return (
     
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" width="100%" cellSpacing="0">
                        <thead>
                            <UserTableHead/>
                        </thead>
                      
                        <tbody>
                        {
                            usersData.map( ( element , i) => {
                                let userRow = {
                                    Id: element.id,
                                    Nombre: element.name,
                                    Telefono: element.cel, 
                                    Email: element.email,
                                    Direccion: element.address,
                                    
                                    
                                }
                                
                                return <UserChartRow {
                                    ...userRow} key={i}/>
                            })
                            }
                        
                        </tbody>

                        <tfoot>
                            <UserTableHead/>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Users;