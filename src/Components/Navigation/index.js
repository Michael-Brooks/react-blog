import React, {Component} from 'react';
import { Link } from 'react-router';
import Searchbox from '../Searchbox';

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
          {
            this.props.categories.map(function (category) {
              return (
                <a key={category.key} className="nav-item">
                  {category.name}
                </a>
              )
            })
          }
          <span className="nav-item">
              <a className="button">
                <span className="icon">
                  <i className="fa fa-twitter"></i>
                </span>
                <span>Tweet</span>
              </a>
            </span>
          <span className="nav-item">
              <Searchbox {...this.props} />
            </span>
        </div>
      </nav>
    );
  }
}

export default Nav;
