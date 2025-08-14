import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './blogData';
import { useTheme } from '../context/ThemeContext';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isDark } = useTheme();
  const post = blogPosts.find((p: BlogPost) => p.id === parseInt(id || '', 10));

  if (!post) {
    return (
      <div className={`py-20 text-center ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link
          to="/"
          className={`${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'}`}
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="max-w-4xl px-4 mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className={`flex items-center gap-2 mb-6 text-sm font-medium ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'}`}
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>

        {/* Meta Info */}
        <div className="flex items-center gap-6 mb-6 text-sm">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Image */}
        <img src={post.image} alt={post.title} className="mb-6 rounded-lg shadow-md" />

        {/* Markdown Content */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </section>
  );
};

export default BlogDetail;
