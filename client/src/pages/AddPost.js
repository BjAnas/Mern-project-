import React, { useState } from 'react';
//import { createPost } from '../api';
import './AddPost.css';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = { title, content };
      //await createPost(newPost);
      alert('Post added successfully');
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="add-post-container">
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit} className="add-post-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
