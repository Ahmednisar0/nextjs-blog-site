import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/data'; // Import the data
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import CommentSection from '@/components/comment';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(
    (p) => p.slug.toLowerCase() === params.slug.toLowerCase()
  );

  if (!post) {
    notFound();
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center w-screen"
      style={{ backgroundImage: `url('/images/green tree.jpg')` }}
    >
      <Head>
        <title>{post.title} | My Blog</title>
        <meta name="description" content={post.para1} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.para1} />
        <meta property="og:image" content={post.image} />
      </Head>

      <Navbar />
      <div className="container mx-auto p-6 text-white">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg leading-relaxed mb-6">{post.para1}</p>

        {/* Flexbox Layout: Image on the left and para1 on the right */}
        <div className="flex flex-col lg:flex-row mb-6 mt-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full lg:w-1/2 h-auto object-cover mb-4 lg:mb-0 lg:mr-6"
          />
          <div className="w-full lg:w-1/2">
            <p className="text-lg leading-relaxed mt-5">{post.para1}</p>
          </div>
        </div>

        <div className="mb-6">{post.content}</div>
        <CommentSection />
        {/* Add a Comment Section Here */}
      </div>
    </div>
  );
}
