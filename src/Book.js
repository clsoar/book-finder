import React, { Component } from 'react';
import './App.css';


class Book extends Component {
  render() {
    let availableThumbnail = this.props.book.imageLinks ?
    this.props.book.imageLinks.thumbnail : '';
    return (
      <div className="book">
        <div
          className="book-image"
          style={{backgroundImage: `url("${availableThumbnail}")`}}
          alt="Book Cover">
        </div>
        <div className="book-info">
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-author">{this.props.book.author}</div>
          <div className="book-publishing-co">{this.props.book.publisher}</div>
        </div>
        <div className="more-book-info">
        <a
          className="book-info-link"
          href={this.props.book.infoLink}
          target="_blank"
          rel="noopener noreferrer">
          More Info
        </a>
        </div>
      </div>




    )
  }
}

export default Book
