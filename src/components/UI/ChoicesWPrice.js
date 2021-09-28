import React from 'react'
import './ChoicesWPrice.css'

const Choices = (props) => {
    return (
        <table className='choiceList'> 
            {props.choices.map(choice =>
                <tr key={choice.id}>
                    <td className='choiceItem' >{choice.meat}</td> <td> {choice.price}</td>
                </tr>)}
        </table>
    )
}

export default Choices