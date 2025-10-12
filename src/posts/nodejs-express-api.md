---
title: "Building REST APIs with Node.js and Express"
date: "2024-12-09"
author: "Brittany Chiang"
tags: ["Node.js", "Express", "API", "Backend"]
readTime: "10 min read"
published: true
excerpt: "Learn how to build robust REST APIs using Node.js and Express framework."
audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
---

# Building REST APIs with Node.js and Express

Express.js is the most popular web framework for Node.js. Let's build a complete REST API from scratch.

## Setting Up the Project

Initialize a new Node.js project:

```bash
mkdir my-api
cd my-api
npm init -y
npm install express cors helmet morgan
npm install -D nodemon
```

## Basic Server Setup

Create your main server file:

```javascript
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our API" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Creating Routes

Organize your routes in separate files:

```javascript
// routes/users.js
const express = require("express");
const router = express.Router();

// Mock data
let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// GET /api/users
router.get("/", (req, res) => {
  res.json(users);
});

// GET /api/users/:id
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// POST /api/users
router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /api/users/:id
router.put("/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  const { name, email } = req.body;
  users[userIndex] = { ...users[userIndex], name, email };

  res.json(users[userIndex]);
});

// DELETE /api/users/:id
router.delete("/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(userIndex, 1);
  res.status(204).send();
});

module.exports = router;
```

## Error Handling Middleware

Create centralized error handling:

```javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      error: "Validation Error",
      details: err.message,
    });
  }

  res.status(500).json({
    error: "Internal Server Error",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Something went wrong",
  });
};

module.exports = errorHandler;
```

## Environment Configuration

Use environment variables for configuration:

```javascript
// .env
NODE_ENV=development
PORT=3000
DB_CONNECTION_STRING=mongodb://localhost:27017/myapp
JWT_SECRET=your-secret-key

// config/database.js
require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

## API Testing

Test your API endpoints:

```javascript
// tests/api.test.js
const request = require("supertest");
const app = require("../app");

describe("Users API", () => {
  test("GET /api/users should return all users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("POST /api/users should create a new user", async () => {
    const newUser = {
      name: "Test User",
      email: "test@example.com",
    };

    const response = await request(app).post("/api/users").send(newUser);

    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.email).toBe(newUser.email);
  });
});
```

## Best Practices

1. **Use middleware for common functionality**
2. **Implement proper error handling**
3. **Validate input data**
4. **Use environment variables for configuration**
5. **Write tests for your API endpoints**
6. **Implement rate limiting**
7. **Use HTTPS in production**
8. **Document your API endpoints**

## Conclusion

Express.js makes building REST APIs straightforward and flexible. Start with these basics and gradually add more advanced features like authentication, database integration, and testing.
