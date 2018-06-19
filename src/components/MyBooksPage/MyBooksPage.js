import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../BookShelf';

export default function MyBooksPage(props) {
  const { bookShelfs, loading, onLoading, onBookMoved } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {bookShelfs
          ? bookShelfs.map(bookShelf => (
              <BookShelf
                onLoading={onLoading}
                onBookMoved={onBookMoved}
                {...bookShelf}
                key={bookShelf.id}
              />
            ))
          : null}
      </div>
      <div className="open-search">
        <Link to="/search" />
      </div>
    </div>
  );
}
