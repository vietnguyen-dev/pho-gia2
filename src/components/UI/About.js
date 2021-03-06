import React from 'react'
import './About.css'
import Menu from '../Pages/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const About = () => {
    return (
      <div className="main">
        <div>
          <h1 className="mainHeading topDown">Pho Gia</h1>
          <div className='mainText'>
            <p>
              Vietnamese restaurant serving pho soups, noodles and rice dishes in
              simple, traditional digs.
            </p>
            <div className='topMargin'>
              <p>Milwaukie Location</p>
            </div>
            <div className='topMargin'>
              <p>Open Daily 11:00 AM - 9:00 PM </p>
              <p>Full Bar Service | Dine In and To Go</p>
            </div>
          </div>
          <div className='topMargin mainHeading'>
              <Link to='/menu'>
                <button className='leftCenter grow'>
                SEE MENU
                </button>
              </Link>
              <a href="tel:5033035442">
                <button className='grow'>(503) 303-5442</button>
              </a>
              <a href="https://www.google.com/maps/place/Pho+Gia/@45.4606323,-122.7006317,12z/data=!3m1!5s0x54957415f85378b1:0xb7818afe13bb094d!4m9!1m2!2m1!1spho+gia!3m5!1s0x0:0xe49abecfa746000b!8m2!3d45.3954514!4d-122.6154878!15sCgdwaG8gZ2lhWgkiB3BobyBnaWGSARV2aWV0bmFtZXNlX3Jlc3RhdXJhbnQ">
                <button className='grow'>4607 SE Boardman Ave, Milwaukie, OR 97267</button>
              </a>
          </div>
        </div>
        <div className='foodBack'>
          <img className='phoImg topMargin' src={process.env.PUBLIC_URL + `/img/pho-tai-about.png`} alt='28. Pho Tai Beef Round Steak '/>
        </div>
        <Router>
        <Switch>
            <Route exact path="/menu">
              <Menu/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default About
