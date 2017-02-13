import React, {Component} from 'react';
import { Link } from 'react-router';
import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
});

const STYLE = {
  width: '78%'
}

class Post extends Component {
  constructor(props) {
    super();

    this.state = {
      post: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.post = base.syncState(`posts/${this.props.params.slug}`, {
      context: this,
      state: 'post',
      asArray: true,
      then() {
        this.setState({ loading: false })
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.post);
  }

  render() {
    console.log(this.state.post);
    return (
        <div className="modal is-active">
          <Link to="/"><div className="modal-background"></div></Link>
          {
          this.state.loading === true
          ?
            <div className="container has-text-centered">
              <img className="is-loading is-center" src="./progress.gif" alt="Loading..."/>
            </div>
          :
            <div className="modal-content" style={ STYLE }>
              <div className="container box">
                {/* Display blog title */}
                <h1 className="title">{ this.state.post[1] }</h1>
                
                {/* Display blog content */}
                { this.state.post[0] }
              </div>
            </div>
        }
          <Link className="modal-close" to="/"></Link>
        </div>
    )
  }
}

export default Post;