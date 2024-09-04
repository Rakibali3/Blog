import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation'; 

const BlogCard = ({ title, description, imageUrl, slug }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${slug}`);
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      {imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
