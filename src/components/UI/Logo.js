import React from 'react'
import PhoGiaLogo from '../assets/img/pho-gia-logo-background-removed.png'
import './Logo.css'

const Logo = props => {
    return (
      <div>
        <img
          src={PhoGiaLogo}
          alt="pho gia milwaukie logo"
          className="img"
        />
      </div>
    );
}

export default Logo
