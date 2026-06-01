import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { getBlogs, getBlogById } from '../api';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (selectedBlog && contentRef.current) {
      const handleScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setReadingProgress(scrolled);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [selectedBlog]);

  const fetchBlogs = async () => {
    try {
      const response = await getBlogs();
      setBlogs(response.data);
    } catch (error) {
      toast.error('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleReadMore = async (id) => {
    try {
      const response = await getBlogById(id);
      setSelectedBlog(response.data);
      window.scrollTo(0, 0);
    } catch (error) {
      toast.error('Failed to load blog details');
    }
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  if (loading) {
    return (
      <div className="blog-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (selectedBlog) {
    return (
      <BlogDetail
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
        readingProgress={readingProgress}
        calculateReadTime={calculateReadTime}
        contentRef={contentRef}
      />
    );
  }

  return (
    <div className="blog-list-container">
      <div className="blog-header">
        <h1>Stories & Insights</h1>
        <p>Exploring education, technology, and student life</p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={blog}
            onReadMore={handleReadMore}
            calculateReadTime={calculateReadTime}
            stripHtml={stripHtml}
          />
        ))}
      </div>
    </div>
  );
};

const BlogCard = ({ blog, onReadMore, calculateReadTime, stripHtml }) => (
  <article className="blog-card" onClick={() => onReadMore(blog._id)}>
    {blog.coverImage && (
      <div className="blog-card-image">
        <img src={blog.coverImage} alt={blog.title} loading="lazy" />
      </div>
    )}
    <div className="blog-card-content">
      <div className="blog-meta">
        <span className="blog-author">{blog.author}</span>
        <span className="blog-date">
          {new Date(blog.createdAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </span>
        <span className="blog-read-time">
          {calculateReadTime(blog.content)} min read
        </span>
      </div>
      <h2 className="blog-card-title">{blog.title}</h2>
      <p className="blog-card-excerpt">
        {blog.excerpt || stripHtml(blog.content).substring(0, 150)}...
      </p>
      <div className="blog-tags">
        {blog.tags?.slice(0, 3).map((tag, index) => (
          <span key={index} className="blog-tag">#{tag}</span>
        ))}
      </div>
    </div>
  </article>
);

const BlogDetail = ({ blog, onClose, readingProgress, calculateReadTime, contentRef }) => {
  const [showShareMenu, setShowShareMenu] = useState(false);

  const shareOnWhatsApp = () => {
    const url = window.location.href;
    const text = `Check out this article: ${blog.title}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
    setShowShareMenu(false);
  };

  // Function to render content with drop cap
  const renderContent = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(blog.content, 'text/html');
    const firstParagraph = doc.querySelector('p');
    
    if (firstParagraph && firstParagraph.textContent) {
      const firstChar = firstParagraph.textContent.charAt(0);
      const restOfText = firstParagraph.textContent.slice(1);
      firstParagraph.innerHTML = `<span class="drop-cap">${firstChar}</span>${restOfText}`;
    }
    
    return doc.body.innerHTML;
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="reading-progress-bar">
        <div className="progress-fill" style={{ width: `${readingProgress}%` }}></div>
      </div>

      {/* Sticky Header with Share Buttons */}
      <div className="sticky-header">
        <div className="sticky-header-content">
          <button onClick={onClose} className="back-button">
            ← Back to all stories
          </button>
          <div className="share-buttons">
            <button onClick={shareOnWhatsApp} className="share-btn whatsapp" title="Share on WhatsApp">
              📱
            </button>
            <button onClick={shareOnLinkedIn} className="share-btn linkedin" title="Share on LinkedIn">
              🔗
            </button>
          </div>
        </div>
      </div>

      <article className="blog-detail-container" ref={contentRef}>
        {/* Hero Section */}
        {blog.coverImage && (
          <div className="blog-hero-image">
            <img src={blog.coverImage} alt={blog.title} />
          </div>
        )}

        <div className="blog-content-wrapper">
          {/* Title Section */}
          <header className="blog-header-section">
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-byline">
              <div className="author-info">
                <div className="author-avatar">
                  {blog.author.charAt(0).toUpperCase()}
                </div>
                <div className="author-details">
                  <span className="author-name">{blog.author}</span>
                  <div className="post-meta">
                    <span>
                      {new Date(blog.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="separator">·</span>
                    <span>{calculateReadTime(blog.content)} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="blog-tags-section">
              {blog.tags.map((tag, index) => (
                <span key={index} className="blog-tag">#{tag}</span>
              ))}
            </div>
          )}

          {/* Content */}
          <div 
            className="blog-body"
            dangerouslySetInnerHTML={{ __html: renderContent() }}
          />

          {/* Divider */}
          <hr className="blog-divider" />

          {/* Call to Action Section */}
          <div className="cta-section">
            <h2>Ready to take the next step?</h2>
            <p>Visit our campus and experience excellence in education firsthand.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Book a School Visit
              </a>
              <a href="/admissions" className="cta-button secondary">
                Enquire Now
              </a>
              <a href="/contact" className="cta-button outline">
                Contact Us
              </a>
            </div>
          </div>

          {/* Footer Meta */}
          <div className="blog-footer">
            <div className="footer-meta">
              <span>📖 {blog.views || 0} views</span>
              <span>🕒 Last updated: {new Date(blog.updatedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Blog;