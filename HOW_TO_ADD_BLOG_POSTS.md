# 📝 How to Add Blog Posts to Your Portfolio

Your blog is powered by **Markdown files**! Simply drop a `.md` file into the `src/posts/` directory, and it will automatically appear on your blog. No database, no admin panel needed!

---

## 🚀 Quick Start Guide

### Step 1: Navigate to the Posts Directory
Go to: `src/posts/`

### Step 2: Create a New Markdown File
Create a new file with a `.md` extension. Use kebab-case naming:
- ✅ Good: `my-awesome-post.md`, `react-best-practices.md`
- ❌ Bad: `My Post.md`, `post 1.md`

### Step 3: Add Frontmatter
At the very top of your file, add frontmatter (metadata) between `---` markers:

```markdown
---
title: "Your Post Title Here"
date: "2024-12-15"
author: "Your Name"
tags: ["React", "JavaScript", "Tutorial"]
readTime: "5 min read"
published: true
excerpt: "A brief description that appears in the blog list."
---
```

### Step 4: Write Your Content
After the frontmatter, write your blog post content in Markdown:

```markdown
# Main Heading

Your introduction paragraph goes here.

## Section 1

Content for section 1...

### Subsection

More details...

## Code Examples

\`\`\`javascript
const hello = () => {
  console.log("Hello, World!");
};
\`\`\`

## Lists

- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3
```

### Step 5: Save and Refresh
- Save your file
- Refresh your browser
- Your new post appears automatically!

---

## 📋 Complete Example

Here's a complete example blog post:

```markdown
---
title: "10 React Hooks You Should Know"
date: "2024-12-15"
author: "John Doe"
tags: ["React", "Hooks", "JavaScript"]
readTime: "8 min read"
published: true
excerpt: "Master these essential React hooks to write cleaner, more efficient code."
---

# 10 React Hooks You Should Know

React Hooks have revolutionized how we write components. Let's explore the most useful ones!

## 1. useState - State Management

The most basic hook for managing component state:

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

## 2. useEffect - Side Effects

Handle side effects like API calls and subscriptions:

\`\`\`javascript
useEffect(() => {
  fetchData();
}, [dependency]);
\`\`\`

## Key Takeaways

- **useState** for simple state
- **useEffect** for side effects
- **Custom hooks** for reusable logic

Happy coding! 🚀
```

---

## 🔧 Frontmatter Fields Explained

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ Yes | The title of your post | `"My Blog Post"` |
| `date` | ✅ Yes | Publication date (YYYY-MM-DD) | `"2024-12-15"` |
| `author` | ❌ No | Author name (defaults to "Anonymous") | `"John Doe"` |
| `tags` | ❌ No | Array of tags for filtering | `["React", "CSS"]` |
| `readTime` | ❌ No | Estimated reading time | `"5 min read"` |
| `published` | ❌ No | Show/hide post (defaults to true) | `true` or `false` |
| `excerpt` | ❌ No | Short description for listings | `"Learn about..."` |

---

## ✍️ Markdown Features Supported

### Text Formatting
- **Bold text** → `**Bold text**`
- *Italic text* → `*Italic text*`
- `Inline code` → `` `Inline code` ``
- ~~Strikethrough~~ → `~~Strikethrough~~`

### Headings
```markdown
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
```

### Links
```markdown
[Link Text](https://example.com)
```

### Images
```markdown
![Alt text](image-url.jpg)
```

### Code Blocks
````markdown
```javascript
const code = "here";
```
````

### Lists
```markdown
- Unordered list item
- Another item

1. Ordered list item
2. Another item
```

### Blockquotes
```markdown
> This is a quote
```

### Tables
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

---

## 💡 Tips & Best Practices

### 1. **Use Descriptive Filenames**
The filename (without `.md`) becomes the post's URL:
- `react-hooks-guide.md` → `/blog/react-hooks-guide`

### 2. **Keep Excerpts Short**
Aim for 1-2 sentences (100-150 characters) for the excerpt.

### 3. **Use Tags Wisely**
- 2-5 tags per post is ideal
- Be consistent with tag names
- Use the same tags across related posts

### 4. **Date Format Matters**
Always use `YYYY-MM-DD` format:
- ✅ `"2024-12-15"`
- ❌ `"December 15, 2024"`
- ❌ `"12/15/2024"`

### 5. **Draft Posts**
To hide a post while working on it:
```markdown
published: false
```

### 6. **Code Syntax Highlighting**
Specify the language for better highlighting:
````markdown
```javascript
// JavaScript code
```

```python
# Python code
```

```css
/* CSS code */
```
````

---

## 📂 File Structure

```
demo/
└── src/
    └── posts/
        ├── README.md
        ├── example-post-1.md
        ├── example-post-2.md
        └── your-new-post.md  ← Add your posts here!
```

---

## 🎨 Post Organization

### By Date
Posts are automatically sorted by date (newest first).

### By Tags
Readers can filter posts by tags using the blog's filter dropdown.

### By Search
All posts are searchable by title, excerpt, and tags.

---

## ❓ Troubleshooting

### Post Not Showing?
1. **Check the filename**: Must end with `.md`
2. **Check frontmatter**: Must have `---` markers
3. **Check published status**: Should be `published: true` or omitted
4. **Refresh browser**: Clear cache if needed

### Post Shows "Untitled"?
- Make sure you have a `title` field in frontmatter

### Wrong Date Order?
- Dates must be in `YYYY-MM-DD` format
- Check for typos in the date field

### Formatting Looks Wrong?
- Check for proper Markdown syntax
- Code blocks need language specification
- Lists need blank lines before/after

---

## 🔄 Updating Posts

To update an existing post:
1. Open the `.md` file
2. Make your changes
3. Save the file
4. Refresh your browser

The changes appear immediately!

---

## 🗑️ Deleting Posts

To remove a post:
1. Delete the `.md` file from `src/posts/`
2. Refresh your browser

Or set `published: false` to hide it without deleting.

---

## 🎯 Common Use Cases

### Tutorial Post
```markdown
---
title: "Building a Todo App with React"
date: "2024-12-15"
tags: ["React", "Tutorial", "Beginner"]
readTime: "15 min read"
excerpt: "Step-by-step guide to building your first React app."
published: true
---
```

### Quick Tip
```markdown
---
title: "CSS Grid Quick Tip: Auto-Fit vs Auto-Fill"
date: "2024-12-14"
tags: ["CSS", "Quick Tip"]
readTime: "2 min read"
excerpt: "Learn the difference between auto-fit and auto-fill in CSS Grid."
published: true
---
```

### Project Showcase
```markdown
---
title: "Project Showcase: E-commerce Platform"
date: "2024-12-13"
tags: ["Project", "React", "Node.js"]
readTime: "5 min read"
excerpt: "How I built a full-stack e-commerce platform."
published: true
---
```

---

## 🎉 That's It!

You're ready to start blogging! Just create `.md` files in `src/posts/` and watch them appear on your blog automatically.

Happy writing! ✨

