import React from 'react';
import Buttons from './Buttons';

const buttonValues = [
    ['+','-','x','/','AC'],
    ['='],
    [],
    []
]

class OperationsButton extends React.Component {
   
    
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

export default OperationsButton