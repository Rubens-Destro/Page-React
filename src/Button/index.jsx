import './styles.css';

import { Component } from "react";

export class Button extends Component {
    render() {
        const{ text, onClik, disabled } = this.props;
        return (
            <button   
                className = 'button' 
                onClick = { onClik }
                disabled = { disabled }
            >
                {text}
            </button>
        );
    }
}