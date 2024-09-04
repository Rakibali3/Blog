// 'use client';

// import React, { useState, useEffect } from 'react';
// import BlogCard from './BlogCard';

// const Home = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch('/pages/api/blog');
//         if (!res.ok) {
//           throw new Error('Failed to fetch');
//         }
//         const data = await res.json();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching blog posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-6">Blog</h1>
//       <div className="flex flex-wrap justify-center">
//         {posts.length > 0 ? (
//           posts.map((post) => (
//             <div className="w-full sm:w-1/2 md:w-1/3 p-2" key={post.slug}>
//               <BlogCard
//                 title={post.title}
//                 description={post.description}
//                 imageUrl={post.imageUrl}
//                 slug={post.slug}
//               />
//             </div>
//           ))
//         ) : (
//           <p>No posts available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;


'use client';

import React from 'react';
import BlogCard from './BlogCard'; 
import { blogdata } from '../data/blogdata';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="flex flex-wrap justify-center">
        {blogdata.map((post) => (
          <div className="w-full sm:w-1/2 md:w-1/3 p-2" key={post.slug}>
            <BlogCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
