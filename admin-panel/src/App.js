
import { useContext } from "react"

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import NavBar from "./components/navbar/navbar.component";
import Header from "./components/header/header.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import Daily from "./pages/daily/daily.component";
import Monthly from "./pages/monthly/monthly.component";
import NotFound from "./pages/not-found/not-found.component";
import SignIn from "./pages/sign-in/sign-in.component";

import Spinner from "./components/common/spinner/spinner.component";

import { UserContext } from "./contexts/user.context";


function App() {

    const ctx = useContext(UserContext);

    return (
        ! ctx.initialized ? <Spinner/> : (
            ! ctx.currentUser ? <SignIn/> : (
                <Router>
                    <div id="wrapper" className="App">
                        <NavBar />
                        <div id="content-wrapper" className="d-flex flex-column">
                            <div id="content">
                                <Header />
                                <div className="container-fluid">
                                    <Routes>
                                        <Route path='/' element={<Dashboard />} />
                                        <Route path='/daily' element={<Daily />} />
                                        <Route path='/monthly/' element={<Monthly />} />
                                        <Route path='/monthly/:type' element={<Monthly />} />
                                        <Route path='*' element={<NotFound/>} />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            )
        )
    );
}

export default App;
