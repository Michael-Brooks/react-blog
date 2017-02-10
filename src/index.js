import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './Components/App';
import Post from './Components/Post';

import 'bulma/css/bulma.css'
import './index.css';

ReactDOM.render(
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <Route path="/post/:slug" component={ Post } />
      </Route>
    </Router>,
  document.getElementById('root')
);
