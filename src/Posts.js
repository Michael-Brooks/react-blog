import React, {Component} from 'react';

import Searchbox from './Searchbox';

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
            {this.props.categories}
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

class Posts extends Component {
  render () {
    let libraries = this.props.items,
        searchString = this.props.searchString.trim().toLowerCase();


    if(searchString.length > 0){

      // We are searching. Filter the results.

      libraries = libraries.filter(function(l){
        return l.title.toLowerCase().match( searchString );
      });
    }
    return (
        <div>
          <Nav {...this.props} />
          <div className="columns">
            { libraries.map(function (post) {
              const slug = `/post`;
              return (
                  <div key={post.id} className="column is-one-third">
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img alt="placeholder" src="http://bulma.io/images/placeholders/1280x960.png" />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-left">
                            <figure className="image" style={{ height: 40 + 'px', width: 40 + 'px' }}>
                              <img alt="placeholder" src="http://bulma.io/images/placeholders/96x96.png" />
                            </figure>
                          </div>
                          <div className="media-content">
                            <p className="title is-3">{post.title}</p>
                          </div>
                        </div>

                        <div className="content">
                          {post.content.substr(0, 500)}... <a href={slug}>Read More</a>
                          <hr />
                          <small>Author: {post.author}</small>
                          <br />
                          <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                      </div>
                    </div>
                  </div>
              )
            }) }
          </div>
        </div>
    )
  }
}

export default Posts;