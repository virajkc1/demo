// Blog posts data storage
let blogPosts = [
  {
    id: 1,
    title: "5 Common Accessibility Pitfalls and How to Avoid Them",
    excerpt:
      "Learn about the most common accessibility mistakes developers make and how to fix them to create more inclusive web experiences.",
    content:
      "Accessibility is crucial for creating inclusive web experiences. Here are the five most common pitfalls developers encounter...",
    date: "December 10, 2024",
    author: "Brittany Chiang",
    tags: ["Accessibility", "Web Development", "UX"],
    readTime: "5 min read",
    published: true,
    createdAt: new Date("2024-12-10").toISOString(),
  },
  {
    id: 2,
    title: "Building a Design System from Scratch",
    excerpt:
      "A comprehensive guide to creating a scalable design system that your entire team can use effectively.",
    content:
      "Design systems are essential for maintaining consistency across large applications. Here's how to build one from the ground up...",
    date: "November 15, 2024",
    author: "Brittany Chiang",
    tags: ["Design Systems", "Figma", "Frontend"],
    readTime: "8 min read",
    published: true,
    createdAt: new Date("2024-11-15").toISOString(),
  },
  {
    id: 3,
    title: "The Complete Guide to React Hooks",
    excerpt:
      "Everything you need to know about React Hooks, from useState to custom hooks, with practical examples.",
    content:
      "React Hooks revolutionized how we write React components. Let's dive deep into all the hooks available and how to use them effectively...",
    date: "October 20, 2024",
    author: "Brittany Chiang",
    tags: ["React", "JavaScript", "Tutorial"],
    readTime: "12 min read",
    published: true,
    createdAt: new Date("2024-10-20").toISOString(),
  },
  {
    id: 4,
    title: "Mastering CSS Grid Layout",
    excerpt:
      "A deep dive into CSS Grid, covering everything from basic concepts to advanced techniques for creating complex layouts.",
    content:
      "CSS Grid has revolutionized how we create layouts on the web. Let's explore its powerful capabilities and best practices...",
    date: "September 28, 2024",
    author: "Brittany Chiang",
    tags: ["CSS", "Grid", "Layout", "Frontend"],
    readTime: "10 min read",
    published: true,
    createdAt: new Date("2024-09-28").toISOString(),
  },
  {
    id: 5,
    title: "TypeScript Best Practices for React Development",
    excerpt:
      "Essential TypeScript patterns and practices that will make your React applications more robust and maintainable.",
    content:
      "TypeScript brings type safety to React development. Here are the best practices every developer should know...",
    date: "August 15, 2024",
    author: "Brittany Chiang",
    tags: ["TypeScript", "React", "Best Practices"],
    readTime: "15 min read",
    published: true,
    createdAt: new Date("2024-08-15").toISOString(),
  },
  {
    id: 6,
    title: "Performance Optimization Techniques for Web Applications",
    excerpt:
      "Learn proven strategies to improve your web application's performance and deliver better user experiences.",
    content:
      "Performance is crucial for user experience. Here are the most effective techniques to optimize your web applications...",
    date: "July 22, 2024",
    author: "Brittany Chiang",
    tags: ["Performance", "Optimization", "Web Development"],
    readTime: "12 min read",
    published: true,
    createdAt: new Date("2024-07-22").toISOString(),
  },
  {
    id: 7,
    title: "Modern JavaScript ES2024 Features",
    excerpt:
      "Explore the latest JavaScript features and how they can improve your development workflow and code quality.",
    content:
      "JavaScript continues to evolve with exciting new features. Let's dive into the latest additions to the language...",
    date: "June 18, 2024",
    author: "Brittany Chiang",
    tags: ["JavaScript", "ES2024", "Modern Development"],
    readTime: "8 min read",
    published: true,
    createdAt: new Date("2024-06-18").toISOString(),
  },
  {
    id: 8,
    title: "Building Scalable Component Libraries",
    excerpt:
      "Learn how to create and maintain component libraries that scale with your team and projects.",
    content:
      "Component libraries are essential for maintaining consistency across projects. Here's how to build them effectively...",
    date: "May 12, 2024",
    author: "Brittany Chiang",
    tags: ["Components", "Libraries", "Scalability"],
    readTime: "14 min read",
    published: true,
    createdAt: new Date("2024-05-12").toISOString(),
  },
  {
    id: 9,
    title: "Web Security Best Practices for Developers",
    excerpt:
      "Essential security practices every web developer should implement to protect applications and user data.",
    content:
      "Security should be a priority in every web application. Here are the fundamental practices to keep your apps secure...",
    date: "April 8, 2024",
    author: "Brittany Chiang",
    tags: ["Security", "Web Development", "Best Practices"],
    readTime: "11 min read",
    published: true,
    createdAt: new Date("2024-04-08").toISOString(),
  },
  {
    id: 10,
    title: "The Future of Web Development: Trends to Watch",
    excerpt:
      "Exploring emerging technologies and trends that are shaping the future of web development.",
    content:
      "The web development landscape is constantly evolving. Let's explore the trends that will define the future...",
    date: "March 3, 2024",
    author: "Brittany Chiang",
    tags: ["Future", "Trends", "Web Development"],
    readTime: "9 min read",
    published: true,
    createdAt: new Date("2024-03-03").toISOString(),
  },
];

// Function to get all published blog posts
export const getBlogPosts = () => {
  return blogPosts.filter((post) => post.published);
};

// Function to get all blog posts (including unpublished)
export const getAllBlogPosts = () => {
  return blogPosts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
};

// Function to add a new blog post
export const addBlogPost = (postData) => {
  const newPost = {
    id: Date.now(), // Simple ID generation
    title: postData.title,
    excerpt: postData.excerpt,
    content: postData.content,
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    author: postData.author || "Brittany Chiang",
    tags: postData.tags || [],
    readTime: postData.readTime || "5 min read",
    published: postData.published || false,
    createdAt: new Date().toISOString(),
  };

  blogPosts.unshift(newPost); // Add to beginning of array
  return newPost;
};

// Function to update a blog post
export const updateBlogPost = (id, postData) => {
  const index = blogPosts.findIndex((post) => post.id === id);
  if (index !== -1) {
    blogPosts[index] = {
      ...blogPosts[index],
      ...postData,
      id: id, // Ensure ID doesn't change
      createdAt: blogPosts[index].createdAt, // Preserve creation date
    };
    return blogPosts[index];
  }
  return null;
};

// Function to delete a blog post
export const deleteBlogPost = (id) => {
  const index = blogPosts.findIndex((post) => post.id === id);
  if (index !== -1) {
    return blogPosts.splice(index, 1)[0];
  }
  return null;
};

// Function to get a single blog post by ID
export const getBlogPostById = (id) => {
  return blogPosts.find((post) => post.id === id);
};

// Function to get paginated blog posts
export const getPaginatedBlogPosts = (page = 1, postsPerPage = 5) => {
  const publishedPosts = blogPosts.filter((post) => post.published);
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
