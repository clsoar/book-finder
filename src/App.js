import React from 'react';
import './App.css';
import Book from './Book'

class App extends React.Component {

  state = {
    query: '',
    searchResults: []
  }

  bookSearch = (query) => {
    if (query) {
      const url = "https://www.googleapis.com/books/v1/volumes?q=" + query;

      fetch(url, {method:"GET"})
        .then(response => response.json())
        .then(json => {
          let searchResults = json.items;


          this.setState({
            searchResults : searchResults
          })
          console.log(this.state.searchResults);

        })
        console.log("search started");
    }
  }

handleInput = (query) => {
  let trimmedQuery = query.replace(/^\s+/,'')
  this.setState({ query: trimmedQuery })
}

submitKey = (event) => {
  if(event.key === "Enter"){
    this.bookSearch(this.state.query);
    console.log("enter key");
  }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your Search for Books Begins Here</h1>
          <input
            className="book-search-input"
            type="text"
            aria-label="search input"
            placeholder="Enter search criteria here"
            value={this.state.query}
            onChange={(event) => this.handleInput(event.target.value)}
            onKeyPress={this.submitKey}
          />
        </header>
        <main className="book-results-section">
          <div className="books-search-results">
            <ol className="books-list">
            {
              this.state.searchResults.map((searchResults) => {

                return (
                  <li key={searchResults.id}>
                    <Book
                      book={ searchResults.volumeInfo }
                    />
                  </li>
                )
              })}
            </ol>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
