import React from 'react';
import NotFound from '../../assets/not_found.png';

export default function Book({
  imageLinks,
  id,
  shelf,
  title,
  authors,
  onMove
}) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            display: '',
            backgroundImage: `url("${(imageLinks && imageLinks.thumbnail) ||
              NotFound}")`
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={shelf || 'none'}
            onChange={ev => onMove({ id }, ev.target.value)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      {authors &&
        authors.map(author => <div className="book-authors">{author}</div>)}
    </div>
  );
}
