import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Chips.css'

const Chips = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div className='Chips'>
            <div className='Chips-counter'>
                <h3>{count}</h3>
                <button onClick={() => setCount(count + 1)}>NOM NOM NOM</button>
            </div>

            <NavLink to='/'>Go Back</NavLink>
        </div>
    )
}

export default Chips;