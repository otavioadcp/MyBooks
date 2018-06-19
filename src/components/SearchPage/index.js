import React from 'react';
import SearchPage from './SearchPage.js';
import { debounce } from 'lodash';
import { search, getAll } from '../../BooksAPI';
import LoadingOverlay from '../LoadingOverlay';
class SearchContainer extends React.Component {
  state = {
    loading: false,
    results: [],
    books: [],
    query: ''
  };

  async componentDidMount() {
    //faz a busca dos livros que ja estao na Shelf
    //e é usado tambem, ao clicar pra adicionar o livro a alguma shelf,
    //realizando uma atualizacao na pagina
    this.setState({
      books,
      loading: true
    });

    let books = await getAll();

    this.setState({
      books,
      loading: false
    });
  }

  updateQuery = query => {
    this.setState({ loading: true, query });
    this.doSearch();
  };

  //usa o debounce para que nao seja feita a busca, a cada caractere digitado
  //mas sim quando ha um tempo de espera de 0,25 segundos
  doSearch = debounce(async query => {
    let results = await search(this.state.query || ' ');

    let error = null;

    if (results && 'error' in results) {
      error = 'Not Found';
      results = [];
    } else if (results instanceof Array) {
      results = results.filter(x => x);
    }

    this.setState({
      loading: false,
      results,
      error
    });
  }, 250);

  render() {
    const { query, loading, results, error, books } = this.state;

    return (
      <React.Fragment>
        <SearchPage
          searchText={query}
          results={results}
          error={error}
          books={books}
          onBookMoved={() => this.componentWillMount()}
          onLoading={loading => this.setState({ loading })}
          onSearchChange={this.updateQuery}
        />
        <LoadingOverlay loading={loading} />
      </React.Fragment>
    );
  }
}

export default SearchContainer;
