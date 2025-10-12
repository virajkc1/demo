---
title: "Web Security Best Practices for Developers"
date: "2024-12-05"
author: "Brittany Chiang"
tags: ["Security", "Web Development", "Best Practices"]
readTime: "7 min read"
published: true
excerpt: "Essential security practices every web developer should implement to protect applications and users."
audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
---

# Web Security Best Practices for Developers

Security should be a priority from day one. Here are essential practices to protect your web applications.

## Authentication and Authorization

### Secure Password Handling

```javascript
const bcrypt = require("bcrypt");
const saltRounds = 12;

// Hash passwords
const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

// Verify passwords
const verifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

// Never store plain text passwords
const user = {
  email: "user@example.com",
  password_hash: await hashPassword("userpassword"),
};
```

### JWT Implementation

```javascript
const jwt = require("jsonwebtoken");

// Generate token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Verify token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error("Invalid token");
  }
};
```

### Session Management

```javascript
const session = require("express-session");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);
```

## Input Validation and Sanitization

### Server-side Validation

```javascript
const { body, validationResult } = require("express-validator");

// Validation rules
const validateUser = [
  body("email").isEmail().normalizeEmail(),
  body("password")
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),
  body("username")
    .isLength({ min: 3, max: 20 })
    .matches(/^[a-zA-Z0-9_]+$/),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
```

### SQL Injection Prevention

```javascript
// Use parameterized queries
const getUser = async (userId) => {
  const query = "SELECT * FROM users WHERE id = ?";
  const result = await db.execute(query, [userId]);
  return result[0];
};

// Never concatenate user input
// BAD: `SELECT * FROM users WHERE id = ${userId}`
// GOOD: Use parameterized queries
```

### XSS Prevention

```javascript
const helmet = require("helmet");
const DOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

// Set security headers
app.use(helmet());

// Sanitize HTML content
const sanitizeHTML = (dirty) => {
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  return purify.sanitize(dirty);
};

// Example usage
const userInput = '<script>alert("xss")</script><p>Safe content</p>';
const cleanInput = sanitizeHTML(userInput);
// Result: '<p>Safe content</p>'
```

## HTTPS and SSL/TLS

### Force HTTPS

```javascript
// Express.js
app.use((req, res, next) => {
  if (
    req.header("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV === "production"
  ) {
    res.redirect(`https://${req.header("host")}${req.url}`);
  } else {
    next();
  }
});
```

### Security Headers

```javascript
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
  })
);
```

## Rate Limiting

```javascript
const rateLimit = require("express-rate-limit");

// General rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP",
});

app.use("/api/", limiter);

// Stricter rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  skipSuccessfulRequests: true,
});

app.use("/api/auth/login", authLimiter);
```

## Environment Security

### Environment Variables

```javascript
// .env file (never commit to version control)
NODE_ENV=production
JWT_SECRET=your-super-secret-jwt-key
DB_PASSWORD=secure-database-password
API_KEY=your-api-key

// Load environment variables
require('dotenv').config();

// Validate required environment variables
const requiredEnvVars = ['JWT_SECRET', 'DB_PASSWORD'];
requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});
```

### Secrets Management

```javascript
// Use proper secrets management in production
const AWS = require("aws-sdk");
const secretsManager = new AWS.SecretsManager();

const getSecret = async (secretName) => {
  try {
    const result = await secretsManager
      .getSecretValue({ SecretId: secretName })
      .promise();
    return JSON.parse(result.SecretString);
  } catch (error) {
    console.error("Error retrieving secret:", error);
    throw error;
  }
};
```

## File Upload Security

```javascript
const multer = require("multer");
const path = require("path");

// Configure file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: fileFilter,
});
```

## API Security

### API Key Management

```javascript
const authenticateApiKey = (req, res, next) => {
  const apiKey = req.header("X-API-Key");

  if (!apiKey) {
    return res.status(401).json({ error: "API key required" });
  }

  // Validate API key
  if (apiKey !== process.env.VALID_API_KEY) {
    return res.status(401).json({ error: "Invalid API key" });
  }

  next();
};

app.use("/api/", authenticateApiKey);
```

### CORS Configuration

```javascript
const cors = require("cors");

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "https://yourdomain.com",
      "https://www.yourdomain.com",
    ];

    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
```

## Logging and Monitoring

```javascript
const winston = require("winston");

// Configure logging
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// Log security events
const logSecurityEvent = (event, details) => {
  logger.warn("Security Event", {
    event,
    details,
    timestamp: new Date().toISOString(),
    ip: req.ip,
    userAgent: req.get("User-Agent"),
  });
};
```

## Security Checklist

- [ ] Use HTTPS in production
- [ ] Implement proper authentication and authorization
- [ ] Hash passwords with bcrypt
- [ ] Validate and sanitize all inputs
- [ ] Use parameterized queries to prevent SQL injection
- [ ] Set security headers with Helmet
- [ ] Implement rate limiting
- [ ] Secure file uploads
- [ ] Use environment variables for secrets
- [ ] Enable logging and monitoring
- [ ] Keep dependencies updated
- [ ] Regular security audits

## Conclusion

Security is an ongoing process. Implement these practices from the start and regularly review and update your security measures.
