import { Component } from "react";

class PaginatePostButton extends Component {
    render () {
        const {texto} = this.props;
        return (
            <button>
                {texto}
            </button>
        );
    }
}

export default PaginatePostButton;