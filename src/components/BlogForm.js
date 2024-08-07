import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = ({ onPostAdded }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, content, author };
        
        axios.post('http://localhost/INTERNSHIP_PROJECT/api/create.php', newPost, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => {
            if (response.data.status === 'success') {
                alert('Post created successfully!');
                onPostAdded(); // Trigger re-fetch in parent component
            } else {
                alert('Error: ' + response.data.message);
            }
        })
        .catch(error => console.error('Error creating post:', error));
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BlogForm;

