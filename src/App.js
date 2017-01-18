import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const BLOG = {
  "publishers": [
    {
      id: 1,
      name: "Michael Brooks"
    }
  ],
  "categories": [
      {
        id: 1,
        name: "Tutorials"
      },
    {
      id: 2,
      name: "Exercise"
    }
  ],
  "posts": [
    {
      id: 1,
      categoryID: 1,
      publisherID: 1,
      title: "First blog post",
      description: "This is my first blog post example"
    },
    {
      id: 2,
      categoryID: 2,
      publisherID: 1,
      title: "Post on fitness",
      description: "This is a lovely post on fitness. Woohoo!"
    }
  ]
};

const categories =  BLOG.categories.map(function(category) {
  return (
      <li className="nav-item" key={category.id}>
        <a className="nav-link" href="#">
          {category.name}
        </a>
      </li>
  )
});

class Nav extends Component {
  render() {
    return (
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
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
            <a className="nav-item">
              Home
            </a>
            <a className="nav-item">
              Documentation
            </a>
            <a className="nav-item">
              Blog
            </a>

            <span className="nav-item">
      <a className="button" >
        <span className="icon">
          <i className="fa fa-twitter"></i>
        </span>
        <span>Tweet</span>
      </a>
      <a className="button is-primary">
        <span className="icon">
          <i className="fa fa-download"></i>
        </span>
        <span>Download</span>
      </a>
    </span>
          </div>
        </nav>
    );
  }
}

class Posts extends Component {
  render() {
    return (
        <div className="container">

        </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav blog={BLOG} />
        <div className="container">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
