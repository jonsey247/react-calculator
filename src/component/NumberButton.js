import React from 'react';
import Buttons from './Buttons';

const buttonValues = [
    [7,8,9],
    [4,5,6],
    [1,2,3],
    [0,'00','.']
]

class NumberButtons extends React.Component {
   
    
    render() {
        return (
        <div>
           {buttonValues.map((row, i) => {
               return (
                   <div key={i} className='row'>
                       {row.map((value) => {
                           return <Buttons 
                           key={value} 
                           value={value} 
                           handleClick={this.props.addNumber}
                           />
                       })}
                   </div>
               )
           })}
        </div>
        );
    }

}

export default NumberButtons