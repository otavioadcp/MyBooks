import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../Book';

class SearchPage extends React.Component {
  focus(input) {
    //faz com que ao acessar a tela de busca, o campo de pesquisa ja venha com foco
    if (input) input.focus();
  }

  getShelf(id) {
    //busca os livros existentes ja na Shelf,
    //realizando um filtro em cima deles para poder saber em qual pratileira estao
    let books = this.props.books || [];
    return books.filter(x => x.id === id).map(x => x.shelf)[0];
  }

  render() {
    const { searchText, onSearchChange, results, error } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              ref={input => this.focus(input)}
              type="text"
              value={searchText}
              onChange={ev => onSearchChange(ev.target.value)}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <div>{error}</div>
          <ol className="books-grid">
            {results &&
              results.map(book => (
                <li>
                  <Book
                    {...book}
                    shelf={this.getShelf(book.id)}
                    onLoading={this.props.onLoading}
                    onMoved={this.props.onBookMoved}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
