import React from 'react'
import './MenuItem.css'
import DietType from './DietType';
import Choices from './ChoicesWPrice';

const MenuItem = props => {
    const choice = props.price.includes('choice')
    const diet = props.dietType.includes('gluten free' || 'vegetarian')
    const image = props.image.includes('/')
    // console.log(props.itemNum, props.image)

    return (
      <div className="menuItem">
        <div>
          <p className='itemHead'>{props.itemNum}.</p>
        </div>
        <div>
          <div className='itemHeader'>
            <h3 className="itemHead">{props.name}</h3>
            { diet && <DietType type={props.dietType} /> }
          </div>
          <p className="itemBody">{props.description}</p>
          { choice && <Choices choices={props.choices} /> }
          { image && <img src={process.env.PUBLIC_URL + `/img/${props.image}`} alt={props.name} style={{width: `50%`}}/>}
        </div>
        <div>
          <h3 className="itemPrice">$ {props.price}</h3>
        </div>
      </div>
    );
}

export default MenuItem
