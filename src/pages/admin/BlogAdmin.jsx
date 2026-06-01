import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog
} from '../../api';
import RichTextEditor from '../../components/RichTextEditor';
import './BlogAdmin.css';

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    tags: '',
    coverImage: null
  });
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await getBlogs();
      setBlogs(response.data);
    } catch (error) {
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'coverImage') {
      const file = files[0];
      setFormData({ ...formData, coverImage: file });
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleContentChange = (content) => {
    setFormData({ ...formData, content });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      toast.error('Please enter a title');
      return;
    }
    
    if (!formData.content.trim()) {
      toast.error('Please enter content');
      return;
    }
    
    if (!formData.author.trim()) {
      toast.error('Please enter author name');
      return;
    }

    try {
      if (editingBlog) {
        await updateBlog(editingBlog._id, formData);
        toast.success('Blog updated successfully');
      } else {
        await createBlog(formData);
        toast.success('Blog created successfully');
      }
      setShowModal(false);
      resetForm();
      fetchBlogs();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Operation failed');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteBlog(id);
        toast.success('Blog deleted successfully');
        fetchBlogs();
      } catch (error) {
        toast.error('Failed to delete blog');
      }
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt || '',
      author: blog.author,
      tags: blog.tags ? blog.tags.join(', ') : '',
      coverImage: null
    });
    if (blog.coverImage) {
      setPreviewImage(blog.coverImage);
    }
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      author: '',
      tags: '',
      coverImage: null
    });
    setPreviewImage(null);
    setEditingBlog(null);
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="blog-admin-container">
      <div className="admin-header">
        <h1>Blog Management</h1>
        <button onClick={() => {
          resetForm();
          setShowModal(true);
        }} className="create-btn">
          + Create New Blog
        </button>
      </div>

      <div className="blogs-table-container">
        <table className="blogs-table">
          <thead>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>Tags</th>
              <th>Views</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>
                  {blog.coverImage && (
                    <img src={blog.coverImage} alt={blog.title} className="table-thumbnail" />
                  )}
                </td>
                <td>
                  <div className="blog-title-cell">
                    <strong>{blog.title}</strong>
                    <span className="blog-excerpt">
                      {blog.excerpt || stripHtml(blog.content).substring(0, 60)}...
                    </span>
                  </div>
                </td>
                <td>{blog.author}</td>
                <td>
                  <div className="tags-list">
                    {blog.tags?.slice(0, 2).map((tag, index) => (
                      <span key={index} className="tag">#{tag}</span>
                    ))}
                    {blog.tags?.length > 2 && <span className="tag">+{blog.tags.length - 2}</span>}
                  </div>
                </td>
                <td>{blog.views || 0}</td>
                <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td>
                  <div className="action-buttons">
                    <button onClick={() => handleEdit(blog)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDelete(blog._id)} className="delete-btn">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {blogs.length === 0 && (
          <div className="empty-state">
            <p>No blogs found. Create your first blog!</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingBlog ? 'Edit Blog' : 'Create New Blog'}</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            </div>
            
            <form onSubmit={handleSubmit} className="blog-form">
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter blog title"
                />
              </div>

              <div className="form-group">
                <label>Author *</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  placeholder="Enter author name"
                />
              </div>

              <div className="form-group">
                <label>Excerpt (Optional)</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Brief summary of the blog post"
                />
              </div>

              <div className="form-group">
                <label>Content *</label>
                <RichTextEditor
                  value={formData.content}
                  onChange={handleContentChange}
                  placeholder="Write your story here... Use the toolbar above to format text, add headings, lists, and more!"
                />
              </div>

              <div className="form-group">
                <label>Tags (Optional - comma separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="education, technology, news"
                />
                <small className="helper-text">Separate tags with commas</small>
              </div>

              <div className="form-group">
                <label>Cover Image (Optional)</label>
                <input
                  type="file"
                  name="coverImage"
                  onChange={handleChange}
                  accept="image/*"
                />
                {previewImage && (
                  <div className="image-preview">
                    <img src={previewImage} alt="Preview" />
                  </div>
                )}
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setShowModal(false)} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  {editingBlog ? 'Update Blog' : 'Publish Blog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogAdmin;