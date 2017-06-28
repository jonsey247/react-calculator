import React from 'react';

export default function calculate(props) {
    const leftNum = this.props.leftNumber;
    const operator = this.props.operator;
    const rightNum = this.props.rightNumber;
    
    if (operator === '=') {
        if (operator === '+') {
            return leftNum + rightNum;
        }
        if (operator === '-') {
            return leftNum - rightNum;
        }
        if (operator === 'x') {
            return leftNum * rightNum;
        }
        if (operator === '÷') {
            return leftNum / rightNum;
        }
        if (operator === '%') {
            return leftNum % rightNum;
        }
        throw Error(`Unknown operation '${operation}'`)
    }

}