import React from 'react';
import MyBooksPage from './MyBooksPage';
import { getAll } from '../../BooksAPI';
import { groupBy, keys } from 'lodash';
import LoadingOverlay from '../LoadingOverlay';

class MyBooksContainer extends React.Component {
  state = {
    books: null,
    loading: false
  };

  mapShelfTitle(shelfId) {
    switch (shelfId) {
      case 'currentlyReading':
        return 'Currently Reading';
      case 'read':
        return 'Read';
      case 'wantToRead':
        return 'Want to Read';

      default:
        return 'none';
    }
  }

  async componentWillMount() {
    this.setState({ loading: true });

    const books = await getAll();

    const groupedBooks = groupBy(books, 'shelf');

    const bookShelfs = keys(groupedBooks).map(shelf => ({
      shelf,
      books: groupedBooks[shelf],
      id: shelf,
      title: this.mapShelfTitle(shelf)
    }));

    this.setState({
      loading: false,
      bookShelfs
    });
  }

  render() {
    const { bookShelfs, loading } = this.state;

    return (
      <React.Fragment>
        <MyBooksPage
          onLoading={loading => this.setState({ loading })}
          onBookMoved={() => this.componentWillMount()}
          loading={loading}
          bookShelfs={bookShelfs}
        />
        <LoadingOverlay loading={loading} />
      </React.Fragment>
    );
  }
}

export default MyBooksContainer;
