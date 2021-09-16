import { NavLink } from "react-router-dom";
import './Soda.css'

const Soda = () => {
    return (
        <div className='Soda'>
            <p>SUGARY SODA</p>
            <NavLink to='/'>Go Back</NavLink>
        </div>
    )
}

export default Soda;