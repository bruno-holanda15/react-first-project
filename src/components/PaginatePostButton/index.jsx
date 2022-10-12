import { Component } from "react";

class PaginatePostButton extends Component {
    render () {
        const {texto, loadPosts} = this.props;
        return (
            <button onClick={loadPosts}>
                {texto}
            </button>
        );
    }
}

export default PaginatePostButton;