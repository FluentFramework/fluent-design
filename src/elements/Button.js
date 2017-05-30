import React from 'react';
import ReactDOM from 'react-dom';

import './button.styl';
import '../base/_all.styl'

class Button extends React.Component {
    render() {
        return (
            <button className="fd-button">Button</button>
        )
    }
}

export default Button