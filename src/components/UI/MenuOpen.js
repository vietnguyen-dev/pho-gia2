import React from 'react'
import './MenuOpen.css'

const MenuOpen = () => {
    return (
      <div className="downUp">
        <h1>Menu</h1>
        <p className="menuText">
          Please Let us know if you are allergic to any ingredient!
        </p>
        <div className="mealOptions">
          <table>
            <tbody>
              <tr>
                <td>Vegetarian Meal or Option Available</td><td><img
            alt="vegetarian meals and options available"
            src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/vegan.png"
            className="imgLeft"
          /></td>
              </tr>
              <tr>
                <td>Gluten Meal or Option Available</td>
                <td>
                <img
            alt="gluten free meals and options available"
            src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/gluten-free.png"
            className="imgLeft"
          /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='center callInOrder'>
          <a href="tel:5033035442">
            <button>Call in to Order Here</button>
          </a>
        </div>
      </div>
    );
}

export default MenuOpen
