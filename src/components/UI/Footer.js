import React from 'react'
import "./About.css";

const Footer = () => {
    return (
      <div className="greenBack mainText">
        {/* <div>
          Icons made by{" "}
          <a href="https://smashicons.com/" title="Smashicons">
            Smashicons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div> */}
        <div style={{padding: `2% 3%`}}>
          <p>
            <a style={{textDecoration: `none`, color: `white`}}href="https://vietnguyen.dev/">Viet Nguyen | 2021</a>
          </p>
        </div>
      </div>
    );
}

export default Footer
