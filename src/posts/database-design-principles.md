---
title: "Database Design Principles for Web Applications"
date: "2024-12-06"
author: "Brittany Chiang"
tags: ["Database", "SQL", "Design", "Backend"]
readTime: "8 min read"
published: true
excerpt: "Learn essential database design principles for building scalable web applications."
audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
---

# Database Design Principles for Web Applications

Good database design is crucial for application performance, scalability, and maintainability. Let's explore the fundamental principles.

## Normalization

Normalization reduces data redundancy and improves data integrity:

### First Normal Form (1NF)

- Each column contains atomic values
- No repeating groups

```sql
-- Before 1NF
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    phones VARCHAR(200)  -- "555-1234, 555-5678"
);

-- After 1NF
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE user_phones (
    id INT PRIMARY KEY,
    user_id INT,
    phone VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Second Normal Form (2NF)

- Must be in 1NF
- All non-key attributes fully depend on the primary key

### Third Normal Form (3NF)

- Must be in 2NF
- No transitive dependencies

## Entity-Relationship Design

Design relationships between entities:

### One-to-Many

```sql
-- User has many Posts
CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);

CREATE TABLE posts (
    id INT PRIMARY KEY,
    title VARCHAR(200),
    content TEXT,
    user_id INT,
    created_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Many-to-Many

```sql
-- Posts can have many Tags, Tags can be on many Posts
CREATE TABLE posts (
    id INT PRIMARY KEY,
    title VARCHAR(200),
    content TEXT
);

CREATE TABLE tags (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE post_tags (
    post_id INT,
    tag_id INT,
    PRIMARY KEY (post_id, tag_id),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);
```

## Indexing Strategy

Indexes improve query performance:

```sql
-- Primary key (automatically indexed)
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    username VARCHAR(50),
    created_at TIMESTAMP
);

-- Create additional indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_created_at ON users(created_at);

-- Composite index for common query patterns
CREATE INDEX idx_posts_user_created ON posts(user_id, created_at);
```

## Data Types and Constraints

Choose appropriate data types and constraints:

```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) CHECK (price >= 0),
    stock_quantity INT DEFAULT 0 CHECK (stock_quantity >= 0),
    category_id INT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (category_id) REFERENCES categories(id)
);
```

## Query Optimization

Write efficient queries:

```sql
-- Use specific columns instead of SELECT *
SELECT id, name, email FROM users WHERE active = 1;

-- Use LIMIT for pagination
SELECT * FROM posts ORDER BY created_at DESC LIMIT 10 OFFSET 20;

-- Use JOINs instead of subqueries when possible
SELECT u.name, COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id, u.name;

-- Use appropriate WHERE conditions
SELECT * FROM orders
WHERE created_at >= '2024-01-01'
  AND created_at < '2024-02-01';
```

## Database Schema Evolution

Plan for schema changes:

```sql
-- Add new columns
ALTER TABLE users ADD COLUMN last_login TIMESTAMP;

-- Add constraints
ALTER TABLE products ADD CONSTRAINT chk_price_positive
CHECK (price >= 0);

-- Create new tables for new features
CREATE TABLE user_preferences (
    user_id INT PRIMARY KEY,
    theme VARCHAR(20) DEFAULT 'light',
    notifications BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## Backup and Recovery

Implement backup strategies:

```sql
-- MySQL backup
mysqldump -u username -p database_name > backup.sql

-- PostgreSQL backup
pg_dump -U username database_name > backup.sql

-- Restore from backup
mysql -u username -p database_name < backup.sql
```

## Security Considerations

Protect your database:

```sql
-- Use parameterized queries (prevent SQL injection)
PREPARE stmt FROM 'SELECT * FROM users WHERE id = ?';
SET @user_id = 123;
EXECUTE stmt USING @user_id;

-- Create limited database users
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'secure_password';
GRANT SELECT, INSERT, UPDATE, DELETE ON myapp.* TO 'app_user'@'localhost';

-- Encrypt sensitive data
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100),
    password_hash VARCHAR(255),  -- Store hashed passwords
    ssn_encrypted VARBINARY(255)  -- Encrypt sensitive data
);
```

## NoSQL Considerations

When to consider NoSQL databases:

### Document Databases (MongoDB)

```javascript
// Flexible schema for varying data structures
{
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com",
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      push: false
    }
  },
  posts: [
    { title: "Post 1", content: "..." },
    { title: "Post 2", content: "..." }
  ]
}
```

### When to Use NoSQL

- Rapidly changing schema requirements
- Large amounts of unstructured data
- Need for horizontal scaling
- Complex nested data structures

## Performance Monitoring

Monitor database performance:

```sql
-- MySQL slow query log
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;

-- Check query execution plans
EXPLAIN SELECT * FROM users WHERE email = 'user@example.com';

-- Monitor table sizes
SELECT
    table_name,
    ROUND(((data_length + index_length) / 1024 / 1024), 2) AS 'Size (MB)'
FROM information_schema.tables
WHERE table_schema = 'myapp'
ORDER BY (data_length + index_length) DESC;
```

## Best Practices

1. **Start with normalized design, denormalize for performance**
2. **Use appropriate data types and constraints**
3. **Create indexes for frequently queried columns**
4. **Plan for schema evolution**
5. **Implement proper backup strategies**
6. **Monitor performance regularly**
7. **Use parameterized queries for security**
8. **Consider read replicas for read-heavy workloads**

## Conclusion

Good database design is the foundation of scalable applications. Focus on normalization, proper indexing, and performance monitoring from the start.
