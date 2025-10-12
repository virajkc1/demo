import matter from "gray-matter";
import { Buffer } from "buffer";

// Make Buffer available globally for gray-matter
global.Buffer = Buffer;

// This function loads all markdown files from the posts directory
// Vite's import.meta.glob allows dynamic imports of multiple files
const loadMarkdownPosts = () => {
  // Import all .md files from the posts directory
  const markdownFiles = import.meta.glob("../posts/*.md", {
    eager: true,
    as: "raw",
  });

  const posts = [];

  // Process each markdown file
  Object.entries(markdownFiles).forEach(([filepath, content]) => {
    try {
      // Parse frontmatter and content
      const { data: frontmatter, content: markdownContent } = matter(content);

      // Extract filename for ID
      const filename = filepath.split("/").pop();
      const id = filename.replace(".md", "");

      // Create post object
      const post = {
        id,
        title: frontmatter.title || "Untitled Post",
        excerpt: frontmatter.excerpt || "",
        content: markdownContent,
        date:
          frontmatter.date ||
          new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        author: frontmatter.author || "Anonymous",
        tags: frontmatter.tags || [],
        readTime: frontmatter.readTime || "5 min read",
        published: frontmatter.published !== false, // Default to true if not specified
        createdAt: new Date(frontmatter.date || Date.now()).toISOString(),
        filepath,
        audioUrl: frontmatter.audioUrl || null, // Firebase Storage URL for audio
      };

      posts.push(post);
    } catch (error) {
      console.error(`Error parsing ${filepath}:`, error);
    }
  });

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return posts;
};

// Load posts once when the module is imported
export const markdownPosts = loadMarkdownPosts();

// Function to get all posts
export const getMarkdownPosts = () => {
  return markdownPosts.filter((post) => post.published);
};

// Function to get a single post by ID
export const getMarkdownPostById = (id) => {
  return markdownPosts.find((post) => post.id === id);
};

// Function to get paginated posts
export const getPaginatedMarkdownPosts = (page = 1, postsPerPage = 5) => {
  const publishedPosts = markdownPosts.filter((post) => post.published);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  return {
    posts: publishedPosts.slice(startIndex, endIndex),
    currentPage: page,
    totalPages: Math.ceil(publishedPosts.length / postsPerPage),
    totalPosts: publishedPosts.length,
    hasNextPage: endIndex < publishedPosts.length,
    hasPrevPage: page > 1,
  };
};
