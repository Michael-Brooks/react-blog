import React, {Component} from 'react';

import './App.css';
import Posts from './Posts';
import { BLOG } from './Blog';

const categories = BLOG.categories.map(function (category) {
  return (
      <a key={category.id} className="nav-item">
        {category.name}
      </a>
  )
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchString: ''
    };
  }

  handleChange(e){
    this.setState({
      searchString:e.target.value
    });
  };

  render() {
    return (
        <div className="App">
          <div className="container is-fluid">
            <Posts onChange={(e) => this.handleChange(e)} searchString={this.state.searchString} categories={categories} items={BLOG.posts} />
          </div>
        </div>
    );
  }
}

export default App;
