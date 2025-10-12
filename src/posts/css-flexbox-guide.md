---
title: "Complete Guide to CSS Flexbox"
date: "2024-12-13"
author: "Brittany Chiang"
tags: ["CSS", "Flexbox", "Layout"]
readTime: "9 min read"
published: true
excerpt: "Master CSS Flexbox with this comprehensive guide covering all properties and practical examples."
audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
---

# Complete Guide to CSS Flexbox

Flexbox is a powerful layout method that makes it easy to create responsive and flexible layouts. Let's dive deep into all its properties and use cases.

## What is Flexbox?

Flexbox (Flexible Box Layout) is a one-dimensional layout method that allows you to arrange items in rows or columns. It provides efficient space distribution and alignment capabilities.

## Container Properties

### display: flex

The foundation of flexbox:

```css
.container {
  display: flex;
}
```

### flex-direction

Controls the direction of flex items:

```css
.container {
  flex-direction: row;        /* default */
  flex-direction: row-reverse;
  flex-direction: column;
  flex-direction: column-reverse;
}
```

### justify-content

Aligns items along the main axis:

```css
.container {
  justify-content: flex-start;    /* default */
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
```

### align-items

Aligns items along the cross axis:

```css
.container {
  align-items: stretch;       /* default */
  align-items: flex-start;
  align-items: flex-end;
  align-items: center;
  align-items: baseline;
}
```

## Item Properties

### flex-grow

Controls how much a flex item grows:

```css
.item {
  flex-grow: 1;  /* grows to fill available space */
}
```

### flex-shrink

Controls how much a flex item shrinks:

```css
.item {
  flex-shrink: 0;  /* doesn't shrink */
}
```

### flex-basis

Sets the initial size of a flex item:

```css
.item {
  flex-basis: 200px;
}
```

## Practical Examples

### Navigation Bar

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
```

### Card Layout

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px;  /* grow, shrink, basis */
}
```

## Conclusion

Flexbox is essential for modern CSS layouts. With practice, you'll find it indispensable for creating responsive designs.
