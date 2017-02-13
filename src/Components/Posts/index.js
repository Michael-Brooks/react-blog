import React, {Component} from 'react';
import { Link } from 'react-router';

import Nav from '../Navigation';

class Posts extends Component {
  render() {
    let libraries = this.props.items,
      searchString = this.props.searchString.trim().toLowerCase();

    if (searchString.length > 0) {

      // We are searching. Filter the results.

      libraries = libraries.filter(function (l) {
        return l.title.toLowerCase().match(searchString);
      });
    }
    return (
      <div>
        <Nav {...this.props} />
        <div className="columns">
          { libraries.map(function (post, index) {
            return (
              <div key={index} className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img alt="placeholder" src="http://bulma.io/images/placeholders/1280x960.png"/>
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image" style={{height: 40 + 'px', width: 40 + 'px'}}>
                          <img alt="placeholder" src="http://bulma.io/images/placeholders/96x96.png"/>
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-3">{post.title}</p>
                      </div>
                    </div>

                    <div className="content">
                      {post.content.substr(0, 500)}... <Link to={ `/post/${post.key}` }>Read More</Link>
                      <hr />
                      <small>Michael Brooks</small>
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