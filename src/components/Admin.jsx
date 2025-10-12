import { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash, FaSave, FaTimes } from 'react-icons/fa';
import { 
  getAllBlogPosts, 
  addBlogPost, 
  updateBlogPost, 
  deleteBlogPost 
} from '../data/blogData';

const Admin = () => {
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Brittany Chiang',
    tags: '',
    readTime: '5 min read',
    published: false
  });

  // Load posts on component mount
  useEffect(() => {
    setPosts(getAllBlogPosts());
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const postData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };

    if (isEditing && editingPost) {
      // Update existing post
      const updatedPost = updateBlogPost(editingPost.id, postData);
      if (updatedPost) {
        setPosts(getAllBlogPosts());
        resetForm();
      }
    } else {
      // Add new post
      const newPost = addBlogPost(postData);
      setPosts(getAllBlogPosts());
      resetForm();
    }
  };

  // Reset form to initial state
  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: 'Brittany Chiang',
      tags: '',
      readTime: '5 min read',
      published: false
    });
    setShowForm(false);
    setIsEditing(false);
    setEditingPost(null);
  };

  // Handle edit post
  const handleEdit = (post) => {
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      tags: post.tags.join(', '),
      readTime: post.readTime,
      published: post.published
    });
    setIsEditing(true);
    setEditingPost(post);
    setShowForm(true);
  };

  // Handle delete post
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      deleteBlogPost(id);
      setPosts(getAllBlogPosts());
    }
  };

  // Toggle post published status
  const togglePublished = (post) => {
    updateBlogPost(post.id, { published: !post.published });
    setPosts(getAllBlogPosts());
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Manage your blog posts and content.</p>
        
        <button 
          className="admin-btn primary"
          onClick={() => setShowForm(true)}
        >
          <FaPlus />
          New Blog Post
        </button>
      </div>

      {/* Blog Post Form */}
      {showForm && (
        <div className="admin-form-overlay">
          <div className="admin-form-container">
            <div className="admin-form-header">
              <h2>{isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
              <button className="close-btn" onClick={resetForm}>
                <FaTimes />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-group">
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter blog post title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="excerpt">Excerpt *</label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  placeholder="Brief description of the blog post"
                />
              </div>

              <div className="form-group">
                <label htmlFor="content">Content *</label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows="8"
                  placeholder="Write your blog post content here..."
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    placeholder="Author name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="readTime">Read Time</label>
                  <input
                    type="text"
                    id="readTime"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleInputChange}
                    placeholder="e.g., 5 min read"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Enter tags separated by commas"
                />
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-text">Publish immediately</span>
                </label>
              </div>

              <div className="form-actions">
                <button type="button" onClick={resetForm} className="admin-btn secondary">
                  Cancel
                </button>
                <button type="submit" className="admin-btn primary">
                  <FaSave />
                  {isEditing ? 'Update Post' : 'Create Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Blog Posts List */}
      <div className="admin-posts">
        <h2>Blog Posts ({posts.length})</h2>
        
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id} className="post-item">
              <div className="post-info">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className={`post-status ${post.published ? 'published' : 'draft'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="post-actions">
                <button 
                  className="action-btn toggle-published"
                  onClick={() => togglePublished(post)}
                  title={post.published ? 'Unpublish' : 'Publish'}
                >
                  {post.published ? <FaEye /> : <FaEyeSlash />}
                </button>
                
                <button 
                  className="action-btn edit"
                  onClick={() => handleEdit(post)}
                  title="Edit post"
                >
                  <FaEdit />
                </button>
                
                <button 
                  className="action-btn delete"
                  onClick={() => handleDelete(post.id)}
                  title="Delete post"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
