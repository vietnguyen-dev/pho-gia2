import React from 'react'
import './MenuItem.css'
import DietType from './DietType';
import Choices from './ChoicesWPrice';

const MenuItem = props => {
    const choice = props.price.includes('choice')
    const image = props.image.includes('https://dtc-wsuv.org/vnguyen19/')
    // console.log(props.itemNum, props.image)

    return (
      <div className="menuItem">
        <div>
          <p>{props.itemNum}.</p>
        </div>
        <div>
          <div className='itemHeader'>
            <h3 className="itemHead">{props.name}</h3>
            <DietType type={props.dietType} />
          </div>
          <p className="itemBody">{props.description}</p>
          { choice && <Choices choices={props.choices} /> }
          { image && <img src={props.image} alt={props.name} style={{width: `50%`}}/>}
        </div>
        <div>
          <h3 className="itemPrice">$ {props.price}</h3>
        </div>
      </div>
    );
}

export default MenuItem
