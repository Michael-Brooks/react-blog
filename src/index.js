import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Posts from './Posts';
import Post from './Post'
import 'bulma/css/bulma.css'
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Posts} />
        <Route path="/post" component={Post} />
      </Route>
    </Router>,
  document.getElementById('root')
);
