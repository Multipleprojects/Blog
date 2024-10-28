import React from 'react';
import Link from 'next/link';

/**
 * Example blogs array with Muslim names as authors.
 */
const blogs = [
  
  {
    title: 'Fasting Benefits',
    description: 'The spiritual and physical benefits of fasting in Islam.',
    slug: 'fasting-benefits',
    date: '2023-10-10',
    author: 'Fatimah Ali',
    image: 'https://images.pexels.com/photos/1435891/pexels-photo-1435891.jpeg'
  },
  {
    title: 'Pilgrimage to Mecca',
    description: 'The significance and experience of the Hajj pilgrimage.',
    slug: 'hajj-pilgrimage',
    date: '2023-09-20',
    author: 'Abdullah Ahmed',
    image: 'https://images.pexels.com/photos/756733/pexels-photo-756733.jpeg'
  },
  {
    title: 'The Importance of Charity',
    description: 'How giving back strengthens communities and increases faith.',
    slug: 'importance-of-charity',
    date: '2023-10-15',
    author: 'Aisha Yousaf',
    image: 'https://images.pexels.com/photos/1370086/pexels-photo-1370086.jpeg'
  },
  {
    title: 'Prayers for Strength',
    description: 'Finding strength and comfort through daily prayers.',
    slug: 'prayers-for-strength',
    date: '2023-09-25',
    author: 'Ibrahim Hassan',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg'
  },
  {
    title: 'Prayers for Strength',
    description: 'Finding strength and comfort through daily prayers.',
    slug: 'prayers-for-strength',
    date: '2023-09-25',
    author: 'Ibrahim Hassan',
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  // Add more blog objects here
];

const Blog = () => {
  return (
    <div className="container mt-20 mx-auto p-4">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      
      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden  dark:border-2">
            {/* Blog post image */}
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            
            {/* Blog post content */}
            <div className="p-4">
              {/* Blog post title */}
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              
              {/* Blog post description */}
              <p className="mb-4">{blog.description}</p>
              
              {/* Blog post author and date */}
              <div className="text-sm mb-4">
                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              </div>
              
              {/* Link to the full blog post */}
              <Link href={`/blogpost/${blog.slug}`} className="px-4 py-2 bg-[rgb(31,41,55)] text-white font-semibold rounded hover:bg-indigo-600">
    Read More
  </Link>       </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
