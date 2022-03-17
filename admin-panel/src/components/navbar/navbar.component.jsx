import React, {useEffect, useState} from 'react';
import {Link, useLocation } from "react-router-dom";

const NavBar = () => {

    const [menuToggled, setMenuToggled] = useState(false);
    const [submenusToggled, setSubmenusToggled] = useState([]);

    return (
        <nav>
            <ul className={
                menuToggled
                    ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
                    : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                }
                id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin Panel</div>
                </a>
                <hr className="sidebar-divider my-0"/>

                <li className="nav-item">
                    <Link to="/" className={ menuToggled ? "nav-link" : "nav-link collapsed" }>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <div className="sidebar-heading">
                    Statistics
                </div>

                <li className="nav-item">
                    <Link to="/daily" className={ menuToggled ? "nav-link" : "nav-link collapsed" }>
                        <i className="fas fa-fw fa-table"></i>
                        <span>Daily</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <span className={ menuToggled ? "nav-link c-pointer" : "nav-link c-pointer collapsed" } onClick={ () => {
                        if (submenusToggled.includes('monthly')) {
                            setSubmenusToggled(submenusToggled.filter(menu => menu !== 'monthly'));
                        } else {
                            setSubmenusToggled(...submenusToggled, ['monthly']);
                        }
                    }}>
                        <i className="fas fa-fw fa-table"></i>
                        <span>Monthly</span>
                    </span>
                    <div className={ submenusToggled.includes('monthly') ? "collapse show" : "collapse"}>
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Android:</h6>
                            <Link to="/monthly/purchases" className="collapse-item">Purchases</Link>
                            <Link to="/monthly/retention" className="collapse-item">Retention</Link>
                        </div>
                    </div>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={() => {
                        setSubmenusToggled([]);
                        setMenuToggled(!menuToggled);
                    }}></button>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar