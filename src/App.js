// src/App.js
import React from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import './styles.css';

function App() {
    return (
        <div className="App">
            <h1>Simple Blog</h1>
            <BlogForm />
            <BlogList />
        </div>
    );
}

export default App;
