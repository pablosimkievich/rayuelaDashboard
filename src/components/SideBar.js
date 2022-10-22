import React from 'react';
import image from '../assets/images/Rayuela Logo Horizontaloscuro6.jpg';
import {Link} from 'react-router-dom';


function SideBar(){
    return(
     <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={"/"}>
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Rayuela"/>
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

                {/*<!-- Nav Item - Ordenes de Compra -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to={"/Orders"}>
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ordenes de Compra</span></Link>
                </li>
                   {/*<!-- Nav Item - Juguetes -->*/}
                   <li className="nav-item">
                <Link className="nav-link" to={"/Products"}>
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                
                {/*<!-- Nav Item - Usuarios -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to={"/Users"}>
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Usuarios</span></Link>
                </li>

                {/*<!-- Nav Item - Top10 -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to={"/salesByProduct"}>
                        <i className="fas fa-fw fa-table"></i>
                        <span>Top 10</span></Link>
                </li>



                 {/*<!-- Nav Item - Search -->*/}
                 <li className="nav-item nav-link">
                <Link className="nav-link" to={"/SearchResults"}>
                <i class="fa-solid fa-magnifying-glass"></i>
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