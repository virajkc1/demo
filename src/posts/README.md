# Blog Posts Directory

This directory contains all blog posts in Markdown format. Simply add a new `.md` file here, and it will automatically appear on your blog!

## How to Add a New Blog Post

1. Create a new `.md` file in this directory (e.g., `my-awesome-post.md`)
2. Add frontmatter at the top of the file (see template below)
3. Write your content in Markdown
4. Save the file
5. Refresh your browser - the post will appear automatically!

## Post Template

```markdown
---
title: "Your Post Title Here"
date: "2024-12-15"
author: "Your Name"
tags: ["React", "JavaScript", "Tutorial"]
readTime: "5 min read"
published: true
excerpt: "A brief description of your post that appears in the blog list."
---

# Your Main Heading

Your content goes here. You can use:

- **Bold text**
- _Italic text_
- `Code snippets`
- [Links](https://example.com)
- Images: ![Alt text](image-url.jpg)

## Code Blocks

\`\`\`javascript
const hello = () => {
console.log("Hello, World!");
};
\`\`\`

## Lists

1. Ordered lists
2. Are supported
3. Too

And more Markdown features!
```

## Frontmatter Fields

- **title** (required): The title of your post
- **date** (required): Publication date in YYYY-MM-DD format
- **author** (optional): Post author name
- **tags** (optional): Array of tags for categorization
- **readTime** (optional): Estimated reading time
- **published** (optional): Set to `false` to hide the post (defaults to `true`)
- **excerpt** (optional): Short description shown in post listings

## Tips

- The filename (without .md) becomes the post's unique ID
- Use kebab-case for filenames (e.g., `my-new-post.md`)
- Posts are automatically sorted by date (newest first)
- Published posts appear immediately after saving
- Set `published: false` to draft a post without showing it

## Markdown Support

This blog supports:

- GitHub Flavored Markdown (GFM)
- Code syntax highlighting
- Tables
- Task lists
- Strikethrough
- And more!

Happy blogging! 🚀
