import React from 'react';

const BlogList = ({ posts }) => {
    return (
        <div>
            <h2>Blog Posts</h2>
            {posts.map((post, index) => (
                <div key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p><em>{post.author}</em></p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
