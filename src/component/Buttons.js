import React from 'react';

const Buttons =  ({handleClick, value}) => (
    
         <button onClick={handleClick}>
            {value}
        </button>
    )




export default Buttons