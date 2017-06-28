import React from 'react';
import Buttons from './Buttons';

const buttonValues = [
    ['+','-','x','/','AC'],
    [],
    [],
    []
]

class OperastionsButton extends React.Component {
   
    
    render() {
    console.log(this.state);
        return (
        <div>
           {buttonValues.map((row, i) => {
               return (
                   <div key={i} className='row'>
                       {row.map((value) => {
                           return <Buttons 
                           key={value} 
                           value={value} 
                           handleClick={this.props.addOperator}
                           />
                       })}
                   </div>
               )
           })}
        </div>
        );
    }

}

export default OperastionsButton