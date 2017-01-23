import React, {Component} from 'react';

import { BLOG } from './Blog';

const categories = BLOG.categories.map(function (category) {
  return (
      <a key={category.id} className="nav-item">
        {category.name}
      </a>
  )
});

class Searchbox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

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
        <div className="level-item">
          <p className="control has-addons">
            <input onChange={this.handleChange} className="input" type="text"
                   placeholder="Find a post" />
          </p>
        </div>
    )
  }
}

class Nav extends Component {
  render() {
    return (
        <nav className="nav has-shadow is-fixed-top">
          <div className="nav-left">
            <a href="/" className="nav-item">
              <h1>{process.env.REACT_APP_NAME}</h1>
            </a>
          </div>

          <div className="nav-center">
            <a className="nav-item">
      <span className="icon">
        <i className="fa fa-github"></i>
      </span>
            </a>
            <a className="nav-item">
      <span className="icon">
        <i className="fa fa-twitter"></i>
      </span>
            </a>
          </div>

          <span className="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

          <div className="nav-right nav-menu">
            {categories}
            <span className="nav-item">
              <a className="button">
                <span className="icon">
                  <i className="fa fa-twitter"></i>
                </span>
                <span>Tweet</span>
              </a>
            </span>
            <span className="nav-item">
              <Searchbox items={BLOG.posts} />
            </span>
          </div>
        </nav>
    );
  }
}

export default Nav;