import './styles.css';

import { Component } from "react";

class PaginatePostButton extends Component {
    render () {
        const {texto, loadPosts, disabled} = this.props;
        return (
            <button 
                className='button'
                onClick={loadPosts}
                disabled={disabled}
            >
                {texto}
            </button>
        );
    }
}

export default PaginatePostButton;