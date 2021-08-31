// import { useState } from 'react'

const Page = props => {
    const home = props.heading === 'Home'

    return (
      <div style={{ backgroundColor: `#f5f5ff` }}>
        {home || (
          <h1
            className="topDown"
            style={{
              padding: `5%`,
              fontSize: `3.5vh`,
              textAlign: `center`,
            }}
          >
            {props.heading}
          </h1>
        )}
        {props.children}
      </div>
    );
}

export default Page
