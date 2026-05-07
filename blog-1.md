# Generics: Reusable Code Without Losing Type Safety

Modern applications demand code that is both **reusable** and **safe**. Generics solve this by allowing developers to write flexible components and functions that adapt to different data types while preserving strict typing.

Instead of rewriting the same logic for strings, numbers, or objects, generics let you write it once and reuse it everywhere.

---

# What Are Generics?

Generics are type placeholders.

They allow functions, classes, and interfaces to work with multiple data types while keeping full type information intact.

## Basic Example

```ts
function identity<T>(value: T): T {
  return value;
}
```

Usage:

```ts
const name = identity("Alice"); // string
const age = identity(25); // number
```

The function stays reusable, and TypeScript automatically infers the correct return type.

---

# Why Generics Matter

Without generics, developers often rely on `any`.

```ts
function getFirst(arr: any[]) {
  return arr[0];
}
```

This removes type safety and can lead to runtime errors.

With generics:

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
```

Now the compiler understands the exact type being returned.

```ts
const first = getFirst(["a", "b", "c"]);
// inferred as string
```

---

# Generic Interfaces

Generics are useful for reusable data structures.

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

Usage:

```ts
interface User {
  id: number;
  name: string;
}

const response: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Alice",
  },
};
```

The structure remains reusable while `data` stays strictly typed.

---

# Generic Classes

Generics also work with classes.

```ts
class Storage<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}
```

Usage:

```ts
const numbers = new Storage<number>();

numbers.add(10);
numbers.add(20);
```

The same class can store strings, users, or any custom object safely.

---

# Generic Constraints

Sometimes a generic should only accept specific shapes.

```ts
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(value: T) {
  console.log(value.length);
}
```

Valid:

```ts
logLength("Hello");
logLength([1, 2, 3]);
```

Invalid:

```ts
logLength(42); // Error
```

Constraints make generic code safer and more predictable.

---

# Real-World Use Cases

Generics power many modern frameworks and libraries.

## React State

```ts
const [user, setUser] = useState<User | null>(null);
```

## API Fetching

```ts
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}
```

Usage:

```ts
const users = await fetchData<User[]>("/api/users");
```

---

# Generics vs `any`

## Using `any`

```ts
function process(value: any) {
  return value.name;
}
```

No validation. No safety.

## Using Generics

```ts
function process<T extends { name: string }>(value: T) {
  return value.name;
}
```

Now the compiler guarantees correctness.

---

# Best Practices

- Use generics when logic is reusable across types.
- Prefer constraints over `any`.
- Use meaningful type names in complex functions.

Example:

```ts
function mapArray<Item, Result>(
  items: Item[],
  transform: (item: Item) => Result,
): Result[] {
  return items.map(transform);
}
```

---

# Final Thoughts

Generics are one of the most important tools in modern programming.

They allow developers to build:

- Reusable components
- Flexible APIs
- Strongly typed systems
- Safer applications

By combining flexibility with strict typing, generics help create scalable and maintainable software without sacrificing developer experience.

Mastering generics is essential for writing clean, production-grade TypeScript and modern strongly typed applications.
