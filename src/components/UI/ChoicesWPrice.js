import React from 'react'

const Choices = (props) => {
    return (
        <ul>
            {props.choices.map(choice =>
                <li key={choice.id}>{choice.meat} {choice.price}</li>)}
        </ul>
    )
}

export default Choices