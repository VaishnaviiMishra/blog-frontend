import React, { useState, useEffect } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import './styles.css';
import axios from 'axios';

function App() {
    const [posts, setPosts] = useState([]);

    // Function to fetch posts from the server
    const fetchPosts = () => {
        axios.get('http://localhost/INTERNSHIP_PROJECT/api/read.php')
            .then(response => {
                if (response.data.status === 'success') {
                    setPosts(response.data.posts);
                } else {
                    console.error('Error fetching posts:', response.data.message);
                }
            })
            .catch(error => console.error('Error fetching posts:', error));
    };

    // Use useEffect to fetch posts when the component is mounted
    useEffect(() => {
        fetchPosts();
    }, []);

    // Function to trigger re-fetching of posts when a new post is added
    const handlePostAdded = () => {
        fetchPosts();
    };

    return (
        <div className="App">
            <h1>Simple Blog</h1>
            {/* Pass the handlePostAdded function to BlogForm */}
            <BlogForm onPostAdded={handlePostAdded} />
            <BlogList posts={posts} />
        </div>
    );
}

export default App;
