import React, {useState, useEffect, useContext} from 'react';
import { useLocation } from 'react-router-dom';
import defaultAvatar from '../../assets/images/default-avatar.jpg'
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

const Header = () => {

    const { currentUser } = useContext(UserContext);
    const [profileMenuToggled, setProfileMenuToggled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setProfileMenuToggled(false);
    }, [location]);

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                           aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link" href="/" onClick={ evt => {
                            evt.preventDefault();
                            setProfileMenuToggled(!profileMenuToggled);
                        }}>
                        <div>
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{ currentUser.displayName }</span>
                        <img className="img-profile rounded-circle" alt="" src={ currentUser.photoURL ? currentUser.photoURL : defaultAvatar } />
                        </div>
                    </a>
                    <div className={ profileMenuToggled ?
                            "dropdown-menu dropdown-menu-right shadow animated--grow-in show" :
                            "dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        }>
                        {/*<a className="dropdown-item" href="#">*/}
                        {/*    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>*/}
                        {/*    Profile*/}
                        {/*</a>*/}
                        {/*<a className="dropdown-item" href="#">*/}
                        {/*    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>*/}
                        {/*    Settings*/}
                        {/*</a>*/}
                        {/*<a className="dropdown-item" href="#">*/}
                        {/*    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>*/}
                        {/*    Activity Log*/}
                        {/*</a>*/}
                        {/*<div className="dropdown-divider"></div>*/}
                        <span className="dropdown-item c-pointer" onClick={signOutUser}>
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </span>
                    </div>
                </li>
            </ul>
        </nav>
    )
};

export default Header