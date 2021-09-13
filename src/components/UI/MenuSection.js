import React from 'react'
import MenuItem from "../UI/MenuItem";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const MenuSection = props => {
    return (
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>{props.name}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p style={{padding: `2% 3%`, lineHeight: `1.5`}}>{props.servedWith}</p>
          {props.menuItem.map((item) => (
            <MenuItem
              key={item.id}
              itemNum={item.id}
              dietType={item.dietType}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </AccordionItemPanel>
      </AccordionItem>
    );
}

export default MenuSection