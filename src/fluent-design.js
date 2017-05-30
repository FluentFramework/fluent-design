import React from 'react';
import ReactDOM from 'react-dom';

export class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello!!@!</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);