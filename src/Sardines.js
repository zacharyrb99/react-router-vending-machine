import { NavLink } from "react-router-dom";
import './Sardines.css';

const Sardines = () => {
    return (
        <div className='Sardines'>
            <p>You don't eat the sardines, they eat you!</p>
            <NavLink to='/'>Go Back</NavLink>
        </div>
    )
}

export default Sardines;