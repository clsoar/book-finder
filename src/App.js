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
      let query = this.state.query;
      const url = "https://www.googleapis.com/books/v1/volumes?q=" + query;

      fetch(`${url}`, {method:"GET"})
        .then(response => response.json())
        .then(json => {
          let {searchResults} = json;
          this.setState({
            searchResults : searchResults
          })
        })
        console.log("search started", this.state.searchResults);
    }
  }

handleInput = (query) => {
  let trimmedQuery = query.replace(/^\s+/,'')
  this.setState({ query: trimmedQuery })
  this.bookSearch(query);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your Search for Books Begins Here</h1>
          <input
            className="book-search-input"
            type="text"
            placeholder="Enter search criteria here"
            value={this.state.query}
            onChange={(event) => this.handleInput(event.target.value)}
          />
        </header>
      </div>
    );
  }
}

export default App;
