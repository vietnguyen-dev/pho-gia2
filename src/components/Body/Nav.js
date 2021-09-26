import React, { useState } from 'react'
//import WidthContext from '../../store/width-context';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from '../Pages/Menu';
import Home from '../Pages/Home';
import Toggle from '../UI/Toggle';
import './nav.css'

const Body = () => {
    const [menuState, setMenuState] = useState(true);

    // useEffect(() =>{
    //   console.log(menuState)
    // }, [menuState])

    const settingMenu = state =>{
      setMenuState(state)
    }

    const NavBar = () =>{
      return (
        <ul className={`navItems ${menuState ? `hide` : `show`}`}>
          <li onClick={() => settingMenu(true)} className="navLink">
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => settingMenu(true)} className="navLink">
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
                <p></p>
              </div>
              <Toggle clickEvent={settingMenu} currentMenu={menuState}/>
              <NavBar />
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/menu">
              <Menu/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default Body
