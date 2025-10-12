---
title: "TypeScript for JavaScript Developers"
date: "2024-12-10"
author: "Brittany Chiang"
tags: ["TypeScript", "JavaScript", "Type Safety"]
readTime: "7 min read"
published: true
excerpt: "Learn TypeScript fundamentals and how it enhances JavaScript development."
audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
---

# TypeScript for JavaScript Developers

TypeScript adds static type checking to JavaScript, making your code more robust and maintainable. Let's explore the basics.

## What is TypeScript?

TypeScript is a superset of JavaScript that compiles to plain JavaScript. It adds optional static typing and other features to help catch errors early.

## Basic Types

TypeScript provides several basic types:

```typescript
// Primitive types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];

// Objects
let person: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};
```

## Interfaces

Define the structure of objects:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};
```

## Functions

Type function parameters and return values:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const greetArrow = (name: string): string => `Hello, ${name}!`;

// Optional parameters
function createUser(name: string, age?: number): User {
  return {
    id: Math.random(),
    name,
    email: `${name.toLowerCase()}@example.com`,
    isActive: age ? age >= 18 : true,
  };
}
```

## Classes

TypeScript enhances JavaScript classes:

```typescript
class Animal {
  private name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public speak(): string {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  public speak(): string {
    return `${this.name} barks`;
  }
}
```

## Generics

Create reusable components:

```typescript
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

const firstNumber = getFirstItem([1, 2, 3]); // Type: number | undefined
const firstString = getFirstItem(["a", "b", "c"]); // Type: string | undefined
```

## Union Types

Allow multiple types:

```typescript
type Status = "loading" | "success" | "error";

function handleStatus(status: Status): void {
  switch (status) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log("Success!");
      break;
    case "error":
      console.log("Error occurred");
      break;
  }
}
```

## Benefits of TypeScript

1. **Early Error Detection**: Catch errors at compile time
2. **Better IDE Support**: Enhanced autocomplete and refactoring
3. **Self-Documenting Code**: Types serve as documentation
4. **Easier Refactoring**: Safe renaming and restructuring
5. **Team Collaboration**: Clear contracts between components

## Getting Started

Install TypeScript globally:

```bash
npm install -g typescript
```

Compile TypeScript files:

```bash
tsc filename.ts
```

## Conclusion

TypeScript provides a smooth transition from JavaScript while adding powerful type safety features. Start with basic types and gradually adopt more advanced features.
