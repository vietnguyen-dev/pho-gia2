import React from 'react'
import './DietType.css'

const DietType = props => {
   if (props.type === 'none'){
       return (<p></p>)
   } else if (props.type === 'vegetarian'){
       return (
         <img
           alt="vegetarian meals and options available"
           src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/vegetarian.png"
         />
       );
   } else if (props.type === 'gluten free'){
       return (
         <img
           alt="gluten free meals and options available"
           src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/gluten-free.png"
           className='dietImg'
         />
       );
   } else if (props.type === 'both'){
         return (
           <div>
             <img
               alt="vegetarian meals and options available"
               src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/vegetarian.png"
             />
             <img
               alt="gluten free meals and options available"
               src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/gluten-free.png"
               className='dietImg'
             />
           </div>
         );
   } else{
       console.error('Diet Type Error', props.type)
   }
    
}

export default DietType
