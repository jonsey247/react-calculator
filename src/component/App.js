import React from 'react';

import Display from './Display';
import NumberButton from './NumberButton';
import OperationsButton from './OperationsButton';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftNumber: '',
            operator: '',
            rightNumber: ''
        };
        this.addNumber = this.addNumber.bind(this);
        this.addOperator = this.addOperator.bind(this);
        this.resetState = this.resetState.bind(this);
    }
    render() {
        return (
            <div>
                <Display leftNumber={this.state.leftNumber} operator={this.state.operator} rightNumber={this.state.rightNumber} />
                <NumberButton addNumber={this.addNumber} />
                <OperationsButton addOperator={this.addOperator} />
            </div>
        );
    }

    resetState(event) {
        const ButtonValue = event.target.innerText
        if (ButtonValue === 'AC') {
            this.setState({
                leftNumber: 0,
                operator: '',
                rightNumber: ''
            });
        }

    }
    // clickHandler (event)  { 
    //     const ButtonValue = event.target.innerText;
    //     if (ButtonValue === event.target.name) {
    //         this.setState({
    //             count: this.state.count + ButtonValue
    //         });
    //     }
    // }
    addNumber(event) {
        const value = event.target.innerText;
        if (this.state.operator === '') {
            this.setState({
                leftNumber: this.state.leftNumber + value
            })
        }
        else {
            this.setState({
                rightNumber: this.state.rightNumber + value


            })

        }
    }

    addOperator(event) {
        const value = event.target.innerText;
        this.setState({
            operator: value
        })
    }
}


export default App