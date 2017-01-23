import React, {Component} from 'react';

import { BLOG } from './Blog';

const posts = BLOG.posts.map(function (post) {
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
              {post.content}... <a href={slug}>Read More</a>
              <hr />
              <small>Author: {post.author}</small>
              <br />
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
        </div>
      </div>
  )
});

class Posts extends Component {
  render () {
    return (
        <div className="columns">
          {posts}
        </div>
    )
  }
}

export default Posts;