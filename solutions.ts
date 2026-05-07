//problem-01 --------------------------
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};
filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//problem-02 --------------------------
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
reverseString("Typescript");
// console.log(reverseString("Typescript"));

//problem-03 --------------------------
type StringOrNumber = string | number;
const checkType = (value: StringOrNumber): string => {
  if (typeof value === "string") {
    return "String.";
  } else {
    return "Number.";
  }
};

// console.log(checkType("Hello, World!"));
// console.log(checkType(42));

//problem-04 --------------------------
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
// Sample Input
const user = { id: 1, name: "John Doe", age: 21 };
// console.log(getProperty(user, "name"));

//problem-05 --------------------------
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return { ...book, isRead: true };
};

// Sample Input
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
// console.log(toggleReadStatus(myBook));

//problem-06 --------------------------
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
// Sample Input
const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());

//problem-07 --------------------------
function getIntersection(arr1: number[], arr2: number[]): number[] {
  const setArray2 = new Set(arr2);
  const result: number[] = [];

  for (const num of arr1) {
    if (setArray2.has(num)) {
      result.push(num);
      setArray2.delete(num);
    }
  }

  return result;
}
//Sample Input
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
