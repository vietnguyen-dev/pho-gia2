import React from 'react'
import MenuSection from '../UI/MenuSection';
import {
  Accordion,
} from "react-accessible-accordion";
import sections from '../assets/menuInfo';
import MenuOpen from '../UI/MenuOpen';

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const Menu = () => {
    return (
      <>
        <MenuOpen />
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          {sections.map((section) => (
            <MenuSection
              key={section.id}
              id={section.id}
              name={section.name}
              servedWith={section.servedWith}
              menuItem={section.items}
            />
          ))}
        </Accordion>
      </>
    );
}

export default Menu
