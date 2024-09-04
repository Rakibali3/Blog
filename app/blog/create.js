import React, { useState } from 'react';
import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/router';

const CreateBlogPost = () => {
  const { data: session } = useSession();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, imageUrl, content }),
    });
    if (res.ok) {
      router.push('/');
    }
  };

  if (!session) {
    return (
      <div>
        <h1>You need to be authenticated to create a blog post.</h1>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          className="border p-2 mb-4 w-full"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="border p-2 mb-4 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPost;
