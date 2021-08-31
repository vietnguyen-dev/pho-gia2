import React from 'react'
import './MenuItem.css'
import DietType from './DietType';

const MenuItem = props => {
    return (
      <div className="menuItem">
        <div>
          <p>{props.itemNum}.</p>
        </div>
        <div>
          <h3 className="itemHead">{props.name}</h3>
          <p className="itemBody">{props.description}</p>
          <DietType type={props.dietType} />
        </div>
        <div>
          <h3 className="itemPrice">$ {props.price}</h3>
        </div>
      </div>
    );
}

export default MenuItem
