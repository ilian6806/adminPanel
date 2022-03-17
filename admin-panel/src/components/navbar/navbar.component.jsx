import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBarMenu = (props) => {
    return (
        <li className="nav-item">
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
    }, [location]);

    return (
        <nav>
            <ul className={ "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " + (menuToggled ? 'toggled' : '')}>
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin Panel</div>
                </a>

                <hr className="sidebar-divider my-0"/>

                <NavBarMenu name="Dashboard" url="/" icon="fa-tachometer-alt" toggled={menuToggled} />

                <NavBarHeading text="Statistics" />

                <NavBarMenu name="Daily" url="/daily" icon="fa-table" toggled={menuToggled} />

                <NavBarMenuWithSubmenus
                    name="Monthly" icon="fa-table" id="monthly"
                    toggled={menuToggled} submenusToggled={submenusToggled} setSubmenusToggled={setSubmenusToggled}
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Android</h6>
                        <Link to="/monthly/purchases" className="collapse-item">Purchases</Link>
                        <Link to="/monthly/retention" className="collapse-item">Retention</Link>
                    </div>
                </NavBarMenuWithSubmenus>

                <hr className="sidebar-divider d-none d-md-block"/>

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={doToggleMenu}></button>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar