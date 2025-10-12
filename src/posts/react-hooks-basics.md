---
title: "React Hooks: A Beginner's Guide"
date: "2024-12-12"
author: "Brittany Chiang"
tags: ["React", "Hooks", "JavaScript"]
readTime: "8 min read"
published: true
excerpt: "Learn the fundamentals of React Hooks and how they revolutionize functional components."
audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
---

# React Hooks: A Beginner's Guide

React Hooks revolutionized how we write React components. Let's explore the most important hooks and how to use them effectively.

## What are Hooks?

Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8.

## useState Hook

The most fundamental hook for managing state:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## useEffect Hook

Manages side effects in functional components:

```javascript
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []); // Empty dependency array = run once

  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
}
```

## Custom Hooks

Create your own hooks to share logic:

```javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Usage
function MyComponent() {
  const { count, increment, decrement } = useCounter(10);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

## useContext Hook

Share data without prop drilling:

```javascript
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  return <div className={`header ${theme}`}>Header</div>;
}
```

## Best Practices

1. **Only call hooks at the top level**
2. **Use dependency arrays correctly in useEffect**
3. **Create custom hooks for reusable logic**
4. **Keep hooks focused and single-purpose**

## Conclusion

Hooks make React components more powerful and easier to understand. Start with useState and useEffect, then explore other hooks as needed.
