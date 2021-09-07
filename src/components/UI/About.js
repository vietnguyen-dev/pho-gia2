import React from 'react'
import './About.css'
import Logo from "../UI/Logo";

const About = () => {
    return (
      <div className="main sandBack">
        <div>
          <h2 className="mainHeading topDown">Welcome to</h2>
          <Logo />
        </div>
        <div className="mainText downUp">
          <p>
            Vietnamese restaurant serving pho soups, noodles and rice dishes in
            simple, traditional digs.
          </p>
          <a href="http://places.singleplatform.com/pho-gia/menu?ref=google">
            <button>ORDER ONLINE</button>
          </a>
          <p className="contact">Full Bar Service | Dine In and To Go</p>
          <p className="contact">
            <a href="tel:5033035442">(503) 303-5442</a>
          </p>
          <p className="contact">Open Daily 11:00 AM - 9:00 PM </p>
          <p className="contact">
            <a href="https://www.google.com/maps/place/Pho+Gia/@45.4606323,-122.7006317,12z/data=!3m1!5s0x54957415f85378b1:0xb7818afe13bb094d!4m9!1m2!2m1!1spho+gia!3m5!1s0x0:0xe49abecfa746000b!8m2!3d45.3954514!4d-122.6154878!15sCgdwaG8gZ2lhWgkiB3BobyBnaWGSARV2aWV0bmFtZXNlX3Jlc3RhdXJhbnQ">
              4607 SE Boardman Ave, Milwaukie, OR 97267
            </a>
          </p>
        </div>
      </div>
    );
}

export default About
