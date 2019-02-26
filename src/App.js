import React from 'react';
import './App.css';
import Book from './Book';

class App extends React.Component {

  state = {
    query: '',
    searchResults: null,
    error: null
  }

  bookSearch = (query) => {
      const url = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    (query !== "") ?
      fetch(url, {method:"GET"})
        .then(response => {
          if(response.ok) {
          return response.json();
        } else {
          throw new Error('Something is wrong, try refreshing the page');
          }
        })
        .then(json => {
          let searchResults = json.items;
          this.setState({ searchResults : searchResults })
        })
        .catch(error => this.setState({ error }))
      :
      this.setState({ searchResults : null })

    }




handleInput = (query) => {
  let trimmedQuery = query.replace(/^\s+/,'');
  this.setState({ query: query }, this.bookSearch(trimmedQuery));

}


submitKey = (event) => {
  if(event.key === "Enter"){
    this.bookSearch(this.state.query);
  }
}

handleClick = (event) => {
  this.bookSearch(this.state.query);
}



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your Search for Books Begins Here</h1>
          <div className="search-box-wrapper">
            <input
              className="book-search-input"
              type="text"
              aria-label="search input"
              placeholder="Enter search criteria here"
              value={this.state.query}
              onChange={(event) => this.handleInput(event.target.value)}
              onKeyPress={this.submitKey}
            />
            <button
              className="submit-button"
              type="button"
              onClick={this.handleClick}
            >
            Search
            </button>
          </div>

        </header>
        <main className="book-results-section">
          <div className="books-search-results">
            <ol className="books-list">
            {
              (this.state.searchResults) ?
              this.state.searchResults.map((searchResults) => {

                return (
                  <li key={searchResults.id}>
                    <Book
                      book={ searchResults.volumeInfo }
                    />
                  </li>
                )
              }) : (this.state.error) ?
                <div className="error-message-wrapper">
                  <p className="error-notification">Oh No! Something went oh so dreadfully wrong. Try refreshing the page and starting over. If that doesn't work, contact the site administrator.</p>
                  <p className="error-message">Error Information: {this.state.error.message}{console.log(this.state.error)}</p>
                </div>
              : <p className="start-search-prompt">Begin your search above.</p>

            }
            </ol>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
