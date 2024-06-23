import React, { useState } from 'react';
import { useCreatePostMutation } from '../services/api';

const CreatePost = () => {
  const [createPost] = useCreatePostMutation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, body }).unwrap();
      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Failed to save the post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
