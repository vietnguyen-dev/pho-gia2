import React from 'react'

const DietType = props => {
   if (props.type === 'none'){
       return (<p></p>)
   } else if (props.type === 'vegetarian'){
       return (
         <img
           alt="vegetarian meals and options available"
           src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/vegan.png"
         />
       );
   } else if (props.type === 'gluten free'){
       return (
         <img
           alt="gluten free meals and options available"
           src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/gluten-free.png"
           style={{ width: `11%` }}
         />
       );
   } else if (props.type === 'both'){
         return (
           <div>
             <img
               alt="vegetarian meals and options available"
               src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/vegan.png"
             />
             <img
               alt="gluten free meals and options available"
               src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/gluten-free.png"
               style={{ width: `11%` }}
             />
           </div>
         );
   } else{
       console.error('Diet Type Error', props.type)
   }
    
}

export default DietType
