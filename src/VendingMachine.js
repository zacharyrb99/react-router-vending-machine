import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Sardines from './Sardines';
import Soda from './Soda';
import Chips from './Chips';
import './VendingMachine.css';

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <BrowserRouter>
                <nav className="VendingMachine-nav">
                    <NavLink to='/sardines'> Sardines </NavLink>
                    <NavLink to='/soda'> Soda </NavLink>
                    <NavLink to='/chips'> Chips </NavLink>
                </nav>

                <Route exact path='/sardines'>
                    <Sardines />
                </Route>

                <Route exact path='/soda'>
                    <Soda />
                </Route>

                <Route exact path='/chips'>
                    <Chips />
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;