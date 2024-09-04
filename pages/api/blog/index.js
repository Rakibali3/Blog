import connectToDatabase from '../../../lib/mongodb';
import Blog from '../../../models/Blog';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const posts = await Blog.find({});
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching blog posts' });
    }
  } else if (req.method === 'POST') {
    const { title, description, imageUrl, content } = req.body;

    try {
      const newPost = new Blog({
        title,
        description,
        imageUrl,
        content,
        slug: title.toLowerCase().replace(/ /g, '-'),
      });
      await newPost.save();
      res.status(200).json(newPost);
    } catch (error) {
      res.status(500).json({ error: 'Error creating blog post' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
