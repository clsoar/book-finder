import React, { Component } from 'react'

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-image"></div>
        <div className="book-info">
          <div className="book-title"></div>
          <div className="book-author"></div>
          <div className="book-publishing-co"></div>
          <div className="book-title"></div>
        </div>
        <div className="more-book-info">
        <a
          className="book-info-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn More
        </a>
        </div>
      </div>




    )
  }
}

export default Book
