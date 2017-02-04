import React, {Component} from 'react';

import './App.css';
import Rebase from 're-base';
import Posts from './Posts';

const base = Rebase.createClass({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
});

class App extends Component {
  constructor(props) {
    super(props);

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
        this.setState({loading: false})
      }
    });

    this.categories = base.syncState('categories', {
      context: this,
      state: 'categories',
      asArray: true,
      then() {
        this.setState({loading: false})
      }
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.posts);
  }

  handleChange(e) {
    this.setState({
      searchString: e.target.value
    });
  };

  render() {
    console.log(this.state.categories)
    return (
      <div className="App">
        <div className="container is-fluid">
          {this.state.loading === true ? <img className="is-loading" src="./progress.gif" alt="Loading..."/> :
            <Posts onChange={(e) => this.handleChange(e)} searchString={this.state.searchString}
                   categories={this.state.categories} items={this.state.posts}/>}
        </div>
      </div>
    );
  }
}

export default App;
