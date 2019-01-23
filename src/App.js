import React, { Component } from 'react';
import './App.css';
import AuthorContent from './author-content.component/author-content.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Authors</h1>
        </header>
        <AuthorContent></AuthorContent>
      </div>
    );
  }
}

export default App;
