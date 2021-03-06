import React from 'react'
import './Toggle.css'

const Toggle = props => {
    // const [toggle, setToggle] = useState(props.state)

    return (
      <button
      className='toggle'
        onClick={() => props.clickEvent(!props.currentMenu)}
      >
        <hr className={`toggleBar ${props.currentMenu || "turn1"}`} />
        <hr className={`toggleBar ${props.currentMenu || 'turn2'}`}/>
        <hr className={`toggleBar ${props.currentMenu || 'turn3'}`} />
      </button>
    );
    };

export default Toggle

