# Generics: Reusable Code with Type Safety

Generics enable developers to write flexible, reusable code without sacrificing type safety. Instead of duplicating logic for different data types, generics allow a single implementation to adapt dynamically while preserving strict typing.

---

# What Are Generics?

Generics act as type placeholders for functions, classes, and interfaces.

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

TypeScript automatically infers the correct type, ensuring both flexibility and compile-time safety.

---

# Why Generics Matter

Without generics, developers often rely on `any`:

```ts
function getFirst(arr: any[]) {
  return arr[0];
}
```

This removes type checking and increases the risk of runtime errors.

With generics:

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
```

Usage:

```ts
const first = getFirst(["a", "b", "c"]);
// inferred as string
```

The compiler now preserves the exact return type.

---

# Generic Interfaces

Generics make shared data structures reusable and type-safe.

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

---

# Generic Classes

Generics also improve reusable class design.

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

The same class can safely manage any data type.

---

# Generic Constraints

Constraints restrict generics to specific structures.

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

---

# Real-World Applications

Generics are widely used in modern frameworks and APIs.

## React State

```ts
const [user, setUser] = useState<User | null>(null);
```

## API Requests

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

Using `any` removes type guarantees:

```ts
function process(value: any) {
  return value.name;
}
```

Using generics preserves validation:

```ts
function process<T extends { name: string }>(value: T) {
  return value.name;
}
```

Generics provide flexibility while maintaining correctness.

---

# Best Practices

- Use generics for reusable logic across multiple types.
- Prefer constraints over `any`.
- Use descriptive type names in complex scenarios.

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

# Conclusion

Generics are essential for building scalable, maintainable, and type-safe applications. They enable reusable abstractions while preserving strict type information, resulting in safer code, cleaner APIs, and a better developer experience.

Mastering generics is fundamental to writing production-grade TypeScript and modern strongly typed software.
