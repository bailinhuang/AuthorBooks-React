import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './author.component.css'

class Author extends Component {

  constructor(props) {
    super(props)
    this.name = this.props.name
    this.age = this.props.age
    this.books = this.props.books 
    this.handleHideClick = this.handleHideClick.bind(this)
    this.handleShowClick = this.handleShowClick.bind(this)
    this.state = {
      clicked: false
    }
  }

  handleShowClick() {
    this.setState({clicked: true});
  }

  handleHideClick() {
    this.setState({clicked: false});
  }

  render() {
    let author
    let clicked = this.state.clicked
    if (clicked) {
      author = <AuthorDetailed onClick={this.handleShowClick} name={this.name} age={this.age} books={this.books}/> 
    } else {
      author = <AuthorMin onClick={this.handleShowClick} name={this.name}/> 
    }
    return (
      <div>{author}</div>
    )
  }
}

function AuthorMin(props) {
  return (
    <div>
      <p><button className="link-button" onClick={props.onClick}>{props.name}</button></p> 
    </div>
  );
}

function AuthorDetailed(props) {
  return (
    <div>
      <p><button className="link-button" onClick={props.onClick}>{props.name}</button></p>
      <p>Age: {props.age}</p>
      <ul>
        {props.books.map(book => <li>{book}</li>)}
      </ul> 
    </div>
  );
}

Author.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}

export default Author