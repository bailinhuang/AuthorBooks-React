import React, { Component } from 'react';
import Author from './author.component/author.component'
class AuthorContent extends Component {

  render() {
    const authorsList = authors.map(author => <Author name={author.name} age={author.age} books={author.books}/>)
    return (
      <div> 
        <ul>
          {authorsList}
        </ul>
      </div>
    )
  }
}

const authors = [
  { name: 'Bailin', age: 24, books: ['Far', 'hey'] },
  { name: 'Bailin2', age: 24, books: ['wow'] }
]

export default AuthorContent