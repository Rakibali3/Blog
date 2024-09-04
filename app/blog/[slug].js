// app/blog/[slug].js
import { useRouter } from 'next/router';
import React from 'react';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        {slug ? `Blog Post: ${slug}` : 'Loading...'}
      </h1>
      <p className="text-lg">
        This is where the blog post content would go. You would typically fetch this data based on the `slug` parameter.
      </p>
    </div>
  );
};

export default BlogPost;
