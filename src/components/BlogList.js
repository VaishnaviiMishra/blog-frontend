// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/INTERNSHIP_PROJECT/api/read.php')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p><em>By {post.author}</em></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
