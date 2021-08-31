import React from 'react'
import './Toggle.css'

const Toggle = props => {
    // const [toggle, setToggle] = useState(props.state)

    return (
      <button
        className="toggle"
        onClick={() => props.clickEvent(!props.currentMenu)}
      >
        {props.currentMenu && <hr style={{ borderTop: `2px solid #f5f5ff` }} />}

        {props.currentMenu ? (
          <hr style={{ borderTop: `2px solid #f5f5ff`, marginTop: `15%` }} />
        ) : (
          <hr
            style={{
              borderTop: `2px solid #f5f5ff`,
              transform: `rotate(45deg) translateX(7px)`,
            }}
          />
        )}

        {props.currentMenu ? (
          <hr style={{ borderTop: `2px solid #f5f5ff`, marginTop: `15%` }} />
        ) : (
          <hr
            style={{
              borderTop: `2px solid #f5f5ff`,
              transform: `rotate(-45deg) translateX(7px)`,
            }}
          />
        )}
      </button>
    );
    };

export default Toggle

