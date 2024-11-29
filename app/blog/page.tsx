// pages/blog/index.js
import Link from 'next/link';
import Image from 'next/image'; // Import Image for post images
import { blogPosts } from '@/data/data'; // Import blog posts
import Navbar from '@/components/Navbar'; // Navbar component

export default function Blog() {
  return (
    
    <div
      className="min-h-screen bg-cover w-screen"
      style={{ backgroundImage: `url('/images/bgblog.jpg')` }}
    >
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-yellow-200">Our Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              {/* Blog post image */}
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="object-cover w-full h-48 mb-4"
              />
              <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-gray-200 mb-4">
                {post.content.substring(0, 100)}... {/* Short preview */}
              </p>
              <Link href={`/blog/${post.slug}` } className="text-blue-500 hover:underline">
              Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
