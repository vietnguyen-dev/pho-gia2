import React, { useState} from 'react'
//import WidthContext from '../../store/width-context';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from '../Pages/Menu';
import Home from '../Pages/Home';
import Toggle from '../UI/Toggle';
import './nav.css'

const Body = () => {
    const [menuState, setMenuState] = useState(true);
    // const ctx = useContext(WidthContext)

    const settingMenu = state =>{
      setMenuState(state)
    }

    let choosingMenu = `navItems ${menuState ? `hide` : `show`}`

    const NavBar = () =>{
      return (
        <ul className={choosingMenu}>
          <li className="navLink"ß>
            <Link to="/">Home</Link>
          </li>
          <li className="navLink">
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      );
    }

    return (
      <div>
        <Router>
          <div className="wholeBar">
            <div className="navDiv">
              <div>
                <p style={{color: `white`}}>Pho Gia Milwaukie</p>
              </div>
              <Toggle clickEvent={settingMenu} currentMenu={menuState}/>
              <NavBar />
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/menu">
              <Menu />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default Body
