import React, {Component} from 'react';

import './App.css';
import Rebase from 're-base';
import Posts from '../Posts';

const base = Rebase.createClass({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
});

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      searchString: '',
      posts: [],
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.posts = base.syncState('posts', {
      context: this,
      state: 'posts',
      asArray: true,
      then() {
        this.setState({ loading: false })
      }
    });

    this.categories = base.syncState('categories', {
      context: this,
      state: 'categories',
      asArray: true,
      then() {
        this.setState({ loading: false })
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.posts);
    base.removeBinding(this.categories);
  }

  handleChange(e) {
    this.setState({
      searchString: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        {
          this.state.loading === true
          ?
            <div className="container has-text-centered">
              <img className="is-loading is-center" src="./progress.gif" alt="Loading..."/>
            </div>
          :
            <div className="container is-fluid">
                <Posts onChange={(e) => this.handleChange(e)} searchString={this.state.searchString}
                      categories={this.state.categories} items={this.state.posts}/>
            </div>
        }
        { this.props.children }
      </div>
    );
  }
}

export default App;
