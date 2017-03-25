import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App';
import About from './components/About';
import Books from './components/Books';
import NotFound from './components/NotFound';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="about" component={About} />
    <Route path="books" component={Books} />
    <Route path="*" component={NotFound} />
  </Router>,
document.getElementById('root'));
