import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchPage from './components/SearchPage';
import MyBooksPage from './components/MyBooksPage';

import { Route, Link } from 'react-router-dom';
class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/" component={MyBooksPage} />
      </div>
    );
  }
}

export default BooksApp;
