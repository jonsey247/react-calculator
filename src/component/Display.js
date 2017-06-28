import React from 'react';


class Display extends React.Component {
    render() {
        return (
            <div>
                <div>
                {this.props.leftNumber || 0}{this.props.operator || ''}{this.props.rightNumber || ''}
                </div>
            </div>
        );
    }
}

export default Display