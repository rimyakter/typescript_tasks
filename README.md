# TypeScript Problem Solving & Blog Repository

This repository contains solutions to **7 TypeScript problems** along with **2 conceptual blogs** covering important TypeScript and Object-Oriented Programming topics.

---

# Contents

## Problem Solutions

### Problem 01 — Filter Even Numbers

Implemented a function to filter even numbers from an array.

```ts
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};
```

---

### Problem 02 — Reverse a String

Created a function to reverse a string.

```ts
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
```

---

### Problem 03 — Type Checking with Union Types

Used union types and `typeof` for runtime type checking.

```ts
type StringOrNumber = string | number;
```

---

### Problem 04 — Generic Property Access

Implemented a generic function using `keyof`.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

---

### Problem 05 — Toggle Read Status

Used interfaces and object manipulation.

```ts
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
```

---

### Problem 06 — OOP with Inheritance

Implemented inheritance using `Person` and `Student` classes.

```ts
class Student extends Person
```

---

### Problem 07 — Array Intersection

Found common elements between two arrays efficiently using `Set`.

```ts
function getIntersection(arr1: number[], arr2: number[]): number[];
```

---

# Blogs

## 1. Generics: Reusable Code with Type Safety

Topics covered:

- Generic functions
- Generic interfaces
- Generic classes
- Constraints
- Real-world TypeScript use cases

---

## 2. The Four Pillars of OOP in TypeScript

Topics covered:

- Inheritance
- Polymorphism
- Abstraction
- Encapsulation
- Scalable architecture in TypeScript

---

# Technologies Used

- TypeScript
- Object-Oriented Programming (OOP)
- Generics
- ES6 Features

---

# Learning Outcomes

Through these problems and blogs, the following concepts were practiced:

- Type safety in TypeScript
- Generic programming
- OOP principles
- Array and string manipulation
- Interface and class design
- Writing scalable and maintainable code

---

# Author

Developed as part of TypeScript practice and conceptual learning.
