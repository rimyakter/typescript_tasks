# The Four Pillars of OOP in TypeScript

As TypeScript applications grow, managing complexity becomes increasingly difficult. Object-Oriented Programming (OOP) addresses this challenge through four core principles:

- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

Together, these pillars help developers build scalable, maintainable, and reusable systems.

---

# 1. Inheritance

Inheritance allows one class to reuse the properties and methods of another. This reduces code duplication and promotes shared logic.

## Example

```ts
class User {
  constructor(public name: string) {}

  login() {
    console.log(`${this.name} logged in`);
  }
}

class Admin extends User {
  deleteUser() {
    console.log("User deleted");
  }
}
```

Usage:

```ts
const admin = new Admin("Alice");

admin.login();
admin.deleteUser();
```

## Benefits

- Promotes code reuse
- Reduces redundancy
- Creates clear hierarchical structures

---

# 2. Polymorphism

Polymorphism allows different classes to share the same interface while implementing different behaviors.

## Example

```ts
class Payment {
  process(): void {
    console.log("Processing payment");
  }
}

class CardPayment extends Payment {
  process(): void {
    console.log("Processing card payment");
  }
}

class PayPalPayment extends Payment {
  process(): void {
    console.log("Processing PayPal payment");
  }
}
```

Usage:

```ts
const payments: Payment[] = [new CardPayment(), new PayPalPayment()];

payments.forEach((payment) => payment.process());
```

## Benefits

- Simplifies extensibility
- Supports flexible architectures
- Reduces conditional logic

---

# 3. Abstraction

Abstraction hides implementation details and exposes only essential functionality.

## Example

```ts
abstract class Database {
  abstract connect(): void;

  disconnect() {
    console.log("Disconnected");
  }
}

class PostgreSQL extends Database {
  connect(): void {
    console.log("Connected to PostgreSQL");
  }
}
```

## Benefits

- Simplifies complex systems
- Encourages standardized design
- Improves maintainability

---

# 4. Encapsulation

Encapsulation restricts direct access to internal data and protects object integrity.

## Example

```ts
class BankAccount {
  private balance = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

Usage:

```ts
const account = new BankAccount();

account.deposit(500);

console.log(account.getBalance());
```

## Benefits

- Prevents unintended modifications
- Protects application state
- Improves reliability

---

# Why OOP Matters in Large TypeScript Projects

The four pillars work together to reduce complexity in enterprise-scale applications.

They help teams:

- Reuse shared business logic
- Build modular systems
- Maintain consistent architecture
- Scale applications more efficiently
- Improve readability and testing

TypeScript enhances OOP further through static typing, interfaces, access modifiers, and abstract classes, making large codebases easier to manage.

---

# Conclusion

Inheritance, Polymorphism, Abstraction, and Encapsulation form the foundation of scalable software design. In TypeScript, these principles help organize logic, reduce duplication, and create maintainable systems that remain flexible as applications grow.

Mastering these OOP concepts is essential for building clean, production-ready TypeScript applications.
