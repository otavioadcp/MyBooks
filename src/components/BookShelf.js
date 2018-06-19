//monta a bookshelf
import React from 'react';
import Book from './Book';

export function ShelfTitle({ title }) {
  return <h2 className="bookshelf-title">{title}</h2>;
}

export default function BookShelf({ title, books, onLoading, onBookMoved }) {
  return (
    <div className="bookshelf">
      <ShelfTitle title={title} />
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li>
              <Book onMoved={onBookMoved} onLoading={onLoading} {...book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
