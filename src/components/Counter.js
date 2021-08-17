import React from 'react';

class Counter extends React.Component {
    render() {
        return (
            <div className="box">
                <h1>Counter</h1>
                <h2>{this.props.count}</h2>
                <button className="vert" onClick={this.props.substract}>
                    -
                    </button>
                <button className="rouge" onClick={this.props.increment}>
                    +
                </button>
            </div>
        )
    }
}

export default Counter;