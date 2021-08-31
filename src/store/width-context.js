import React, { useState, useEffect } from 'react'

let WidthContext = React.createContext({
    width: null,
})

export const WidthContextProvider = props =>{
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const handleSizeChange = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleSizeChange);
        handleSizeChange();
        return () => window.removeEventListener("resize", handleSizeChange);
    }, []);

    return(
        <WidthContext.Provider
            value={{
                width: width
            }}
        >
            {props.children}
        </WidthContext.Provider>
    )
}

export default WidthContext