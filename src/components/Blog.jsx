import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaSort,
  FaTimes,
} from "react-icons/fa";
import { getMarkdownPosts } from "../utils/markdownLoader";
import AudioPlayer from "./AudioPlayer";

const Blog = () => {
  const [blogData, setBlogData] = useState({
    posts: [],
    currentPage: 1,
    totalPages: 1,
    totalPosts: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const [filters, setFilters] = useState({
    sortBy: "newest", // newest, oldest, title, readTime
    filterBy: "all", // all, tags
    selectedTag: "",
    searchTerm: "",
  });

  const [allPosts] = useState(getMarkdownPosts());

  // Get all unique tags from posts
  const getAllTags = () => {
    const tags = new Set();
    allPosts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  };

  // Filter and sort posts
  const getFilteredAndSortedPosts = () => {
    let filteredPosts = [...allPosts];

    // Apply search filter
    if (filters.searchTerm) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          post.excerpt
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(filters.searchTerm.toLowerCase())
          )
      );
    }

    // Apply tag filter
    if (filters.filterBy === "tags" && filters.selectedTag) {
      filteredPosts = filteredPosts.filter((post) =>
        post.tags.includes(filters.selectedTag)
      );
    }

    // Apply sorting
    switch (filters.sortBy) {
      case "newest":
        filteredPosts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      case "oldest":
        filteredPosts.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        break;
      case "title":
        filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "readTime":
        filteredPosts.sort((a, b) => {
          const aTime = parseInt(a.readTime);
          const bTime = parseInt(b.readTime);
          return aTime - bTime;
        });
        break;
      default:
        break;
    }

    return filteredPosts;
  };

  // Get paginated results from filtered posts
  const getPaginatedResults = (posts, page, postsPerPage = 5) => {
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    return {
      posts: posts.slice(startIndex, endIndex),
      currentPage: page,
      totalPages: Math.ceil(posts.length / postsPerPage),
      totalPosts: posts.length,
      hasNextPage: endIndex < posts.length,
      hasPrevPage: page > 1,
    };
  };

  useEffect(() => {
    // Reset to page 1 when filters change
    const filteredPosts = getFilteredAndSortedPosts();
    const data = getPaginatedResults(filteredPosts, 1, 5);
    setBlogData(data);
  }, [filters]);

  useEffect(() => {
    // Handle page changes with current filters
    const filteredPosts = getFilteredAndSortedPosts();
    const data = getPaginatedResults(filteredPosts, blogData.currentPage, 5);
    setBlogData(data);
  }, [blogData.currentPage, filters]);

  const handleNextPage = () => {
    if (blogData.hasNextPage) {
      setBlogData((prev) => ({
        ...prev,
        currentPage: prev.currentPage + 1,
      }));
    }
  };

  const handlePrevPage = () => {
    if (blogData.hasPrevPage) {
      setBlogData((prev) => ({
        ...prev,
        currentPage: prev.currentPage - 1,
      }));
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      sortBy: "newest",
      filterBy: "all",
      selectedTag: "",
      searchTerm: "",
    });
  };

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Blog</h1>
        <p>Thoughts on web development, design, and everything in between.</p>
        <div className="blog-stats">
          <span>{blogData.totalPosts} posts</span>
          <span>
            Page {blogData.currentPage} of {blogData.totalPages}
          </span>
        </div>
      </div>

      {/* Compact Filter and Sort Section */}
      <div className="blog-controls">
        <div className="control-group">
          <label htmlFor="sort-select">
            <FaSort /> Sort:
          </label>
          <select
            id="sort-select"
            value={filters.sortBy}
            onChange={(e) => handleFilterChange("sortBy", e.target.value)}
            className="compact-select"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="title">Title (A-Z)</option>
            <option value="readTime">Reading Time</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="filter-select">
            <FaFilter /> Filter:
          </label>
          <select
            id="filter-select"
            value={filters.selectedTag}
            onChange={(e) => handleFilterChange("selectedTag", e.target.value)}
            className="compact-select"
          >
            <option value="">All Tags</option>
            {getAllTags().map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        {(filters.selectedTag || filters.sortBy !== "newest") && (
          <button onClick={clearFilters} className="clear-btn">
            <FaTimes /> Clear
          </button>
        )}
      </div>

      <div className="blog-posts">
        {blogData.posts.map((post) => (
          <article key={post.id} className="blog-post">
            <Link to={`/blog/${post.id}`} className="post-link">
              <h2 className="post-title">{post.title}</h2>
            </Link>
            <p className="post-excerpt">{post.excerpt}</p>

            {/* Audio Player in Blog List */}
            {post.audioUrl && (
              <div className="post-audio-preview">
                <AudioPlayer
                  audioUrl={post.audioUrl}
                  title={`Listen to: ${post.title}`}
                />
              </div>
            )}

            <div className="post-meta">
              <div className="meta-item">
                <FaCalendarAlt />
                <span>{post.date}</span>
              </div>
              <div className="meta-item">
                <FaUser />
                <span>{post.author}</span>
              </div>
              <div className="meta-item">
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">
                  <FaTag />
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="blog-pagination">
        <button
          className={`pagination-btn prev ${
            !blogData.hasPrevPage ? "disabled" : ""
          }`}
          onClick={handlePrevPage}
          disabled={!blogData.hasPrevPage}
        >
          <FaChevronLeft />
          Previous
        </button>

        <div className="pagination-info">
          Page {blogData.currentPage} of {blogData.totalPages}
        </div>

        <button
          className={`pagination-btn next ${
            !blogData.hasNextPage ? "disabled" : ""
          }`}
          onClick={handleNextPage}
          disabled={!blogData.hasNextPage}
        >
          Next
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Blog;
