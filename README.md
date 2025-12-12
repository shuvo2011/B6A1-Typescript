# TypeScript Blog

## 1. What is the use of the keyof keyword in TypeScript? Provide an example.

`keyof` is a **type operator** in TypeScript.  
It extracts all the **keys of an object type** and creates a **union type** out of them.  

## 📘 Example

```ts
type Person = {
  name: string;
  age: number;
  city: string;
};

// keyof Person means:
type PersonKeys = keyof Person; 
// => "name" | "age" | "city"
```

---

## 2. Explain the difference between any, unknown, and never types in TypeScript.

- **any** → Can be anything, no type-checking.  
```ts
let x: any = 10;
x = "hello"; // allowed
```

- **unknown** → A safer any, requires type-checking before use.  
```ts
let y: unknown = "world";
if (typeof y === "string") {
  console.log(y.toUpperCase());
}
```

- **never** → Represents something that never happens.  
```ts
function fail(msg: string): never {
  throw new Error(msg);
}
```
