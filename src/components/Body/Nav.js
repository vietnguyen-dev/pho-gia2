import React, { useState, useEffect, useContext } from 'react'
import WidthContext from '../../store/width-context';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from '../Pages/Menu';
import Home from '../Pages/Home';
import Toggle from '../UI/Toggle';
import './nav.css'

const Body = () => {
    const [menuState, setMenuState] = useState(true);
    const ctx = useContext(WidthContext)

    const settingMenu = state =>{
      setMenuState(state)
    }

    useEffect(() => {
      if (ctx.width > 600) {
        setMenuState(false)
      } else {
        setMenuState(true)
      }
    }, [ctx.width])

    const NavBar = () =>{
      return (
        <ul className={`navItems ${menuState ? "centerRight centerStay" : "rightCenter"}`}>
          <li className="navLink" onClick={() => setMenuState(true)}>
            <Link to="/">Home</Link>
          </li>
          <li className="navLink" onClick={() => setMenuState(true)}>
            <Link to="/menu">Menu</Link>
          </li>
          <li className="navLink" onClick={() => setMenuState(true)}>
            <a href="http://places.singleplatform.com/pho-gia/menu?ref=google">Online Ordering</a>
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
              <Toggle currentMenu={menuState} clickEvent={settingMenu} />
              <div className="navUl">{menuState || <NavBar />}</div>
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
