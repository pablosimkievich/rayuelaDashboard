import React from 'react';
import image from '../assets/images/logo-DH.png';
import {Link} from 'react-router-dom';

function SideBar(){
    return(
     <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={"/"}>
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to={"/"}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - RAYUELA</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Juguetes -->*/}
                <li className="nav-item">
                <Link className="nav-link" to={"/Products"}>
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Ordenes de Compra -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to={"/Orders"}>
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ordenes de Compra</span></Link>
                </li>

                {/*<!-- Nav Item - Usuarios -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to={"/ContentRowDataCards"}>
                        <i className="fas fa-fw fa-table"></i>
                        <span>Usuarios</span></Link>
                </li>

                 {/*<!-- Nav Item - Search -->*/}
                 <li className="nav-item nav-link">
                <Link className="nav-link" to={"/SearchResults"}>
                    <i className="fas fa-fw fa-table"></i>
                        <span>Search</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

         
            </> 
    )
}
export default SideBar;