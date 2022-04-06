import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/io_logo.png'
import './navbar.component.scss'

const NavBarMenu = (props) => {
    return (
        <li className={props.pathname === props.url ? 'nav-item active' : 'nav-item'}>
            <Link to={ props.url } className={ props.toggled ? "nav-link" : "nav-link collapsed" }>
                <i className={ 'fas fa-fw ' + props.icon }></i>
                <span>{ props.name }</span>
            </Link>
        </li>
    )
};

const NavBarMenuWithSubmenus = (props) => {
    return (
        <li className="nav-item">
            <span className={ props.toggled ? "nav-link c-pointer" : "nav-link c-pointer collapsed" } onClick={ () => {
                if (props.submenusToggled.includes(props.id)) {
                    props.setSubmenusToggled(props.submenusToggled.filter(menu => menu !== props.id));
                } else {
                    props.setSubmenusToggled(...props.submenusToggled, [props.id]);
                }
            }}>
                <i className={ 'fas fa-fw ' + props.icon }></i>
                <span>{ props.name }</span>
            </span>
            <div className={ props.submenusToggled.includes(props.id) ? "collapse show" : "collapse"}>
                { props.children }
            </div>
        </li>
    )
};

const NavBarSubmenu = (props) => {
    return (
        <Link to={props.url} className={props.pathname === props.url ? 'collapse-item active' : 'collapse-item'}>{ props.name }</Link>
    );
};

const NavBarHeading = (props) => <div className="sidebar-heading">{ props.text }</div>;

const NavBar = () => {

    let toggleSetting = localStorage.getItem('menuToggled');
    if (! toggleSetting) {
        toggleSetting = false;
        localStorage.setItem('menuToggled', toggleSetting);
    }

    const [menuToggled, setMenuToggledRef] = useState(toggleSetting === 'true');
    const [submenusToggled, setSubmenusToggled] = useState([]);

    const setMenuToggled = (value) => {
        setMenuToggledRef(value);
        localStorage.setItem('menuToggled', value);
    };

    const doToggleMenu = () => {
        setSubmenusToggled([]);
        setMenuToggled(! menuToggled);
    };

    const location = useLocation();

    useEffect(() => {
        if (menuToggled) {
            setSubmenusToggled([]);
        }
    }, [location, menuToggled]);

    return (
        <nav className="main-nav">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={doToggleMenu}>
                <i className="fa fa-bars"></i>
            </button>
            <ul className={ "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " + (menuToggled ? 'toggled' : '')}>
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        {/*<i className="fas fa-laugh-wink"></i>*/}
                        <img src={logo} alt=""/>
                    </div>
                    {/*<div className="sidebar-brand-text mx-3">Admin Panel</div>*/}
                </a>

                <hr className="sidebar-divider my-0"/>

                <NavBarMenu name="Dashboard" url="/" icon="fa-tachometer-alt" pathname={location.pathname} toggled={menuToggled} />

                <NavBarHeading text="Statistics" />

                <NavBarMenu name="Daily" url="/daily" icon="fa-table" pathname={location.pathname} toggled={menuToggled} />

                <NavBarMenuWithSubmenus
                    name="Monthly" icon="fa-table" id="monthly" pathname={location.pathname}
                    toggled={menuToggled} submenusToggled={submenusToggled} setSubmenusToggled={setSubmenusToggled}
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Android</h6>
                        <NavBarSubmenu name="Purchases" url="/monthly/purchases" pathname={location.pathname} />
                        <NavBarSubmenu name="Retention" url="/monthly/retention" pathname={location.pathname} />
                    </div>
                </NavBarMenuWithSubmenus>

                <NavBarMenu name="Utils" url="/utilities" icon="fa-tools" pathname={location.pathname} toggled={menuToggled} />

                <hr className="sidebar-divider d-none d-md-block"/>

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={doToggleMenu}></button>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar