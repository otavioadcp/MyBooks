import Book from './Book';
import React from 'react';
import { update } from '../../BooksAPI';

class BookContainer extends React.Component {
  handleMoveBook = async (book, shelf) => {
    const { onLoading, onMoved } = this.props;

    onLoading && onLoading(true);
    await update(book, shelf);
    onLoading && onLoading(false);
    onMoved && onMoved();
  };

  render() {
    return <Book {...this.props} onMove={this.handleMoveBook} />;
  }
}

export default BookContainer;
