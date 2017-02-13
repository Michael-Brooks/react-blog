import React, {Component} from 'react';
import { Link } from 'react-router';

class Post extends Component {
  render() {
    return (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
            Blog post { this.props.params.slug }
          </div>
          <Link className="modal-close" to="/"></Link>
        </div>
    )
  }
}

export default Post;