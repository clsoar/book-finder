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
          <div className="book-author"><b>By:</b> {(this.props.book.authors) ? this.props.book.authors : "Anon"}</div>
          <div className="book-publishing-co"><b>Publisher:</b> {(this.props.book.publisher) ? this.props.book.publisher : "None Listed" }</div>
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
