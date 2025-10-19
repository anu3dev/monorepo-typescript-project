### 💥 TypeScript Interview Preparation (By Anurag Kumar)

---

####
<details>
<summary> 🟩 Difference between interface and type alias. </summary>

Both `interface` and `type` define the shape of data — but they differ slightly in capabilities and usage.

```ts
interface User {
    name: string;
    age: number;
}
interface User {
    email?: string; // ✅ merged automatically
}

const u: User = { name: "Anurag", age: 30, email: "a@example.com" };

// Interfaces merge declarations, so you can add new fields later.

type User = {
  name: string;
  age: number;
};

// Cannot re-declare same name
// type User = { email: string }; // Error

type ID = string | number; // ✅ Works with unions
type UserWithID = User & { id: ID }; // ✅ Intersection

// Types are more flexible (can represent unions, primitives, tuples), but can’t be reopened like interfaces.
```

</details>

####
<details>
<summary> 🟩 How do generics work? Give example from React or service layer. </summary>

Generics allow you to create reusable, type-safe components, functions, or classes that can work with different data types — without losing type information.

```ts
function identity<T>(value: T): T {
  return value;
}

identity<string>("Anurag"); // returns string
identity<number>(42);       // returns number
```

```tsx
type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
    return <ul>{items.map(renderItem)}</ul>;
}

// Usage
<List
    items={["React", "TypeScript", "Node"]}
    renderItem={(item) => <li key={item}>{item}</li>}
/>
// The component adapts to any item type — fully type-safe and reusable.
```

```ts
// Generic function to fetch typed API responses
async function fetchData<T>(url: string): Promise<T> {
    const res = await fetch(url);
    return res.json() as Promise<T>;
}

// Define expected type
interface User {
    id: number;
    name: string;
}

// Use generic function
const user = await fetchData<User>("/api/user/1");
console.log(user.name); // ✅ type-safe access
// The function returns data of type T, ensuring compile-time safety for API responses.
```

</details>

####
<details>
<summary> 🟩 What are mapped types? Example using Partial<T> and Readonly<T>. </summary>

Mapped types allow you to create new types by transforming existing ones — dynamically modifying each property’s type or modifier (readonly, optional, etc.).

```ts
type User = {
  name: string;
  age: number;
};

// Mapped type: make all fields optional
type OptionalUser = {
  [K in keyof User]?: User[K];
};

// Equivalent to:
type OptionalUser = { name?: string; age?: number };
```

```ts
interface Todo {
    title: string;
    description: string;
}

// Partial → makes props optional
function updateTodo(todo: Todo, fields: Partial<Todo>): Todo {
    return { ...todo, ...fields };
}

const updated = updateTodo(
    { title: "Learn TS", description: "Practice mapped types" },
    { description: "Master generics" } // ✅ only partial fields
);

// Readonly → prevents mutation
const todo: Readonly<Todo> = { title: "Learn", description: "Done" };
// todo.title = "Edit"; // ❌ Error: cannot assign to read-only property

```

</details>

####
<details>
<summary> 🟩 How do union and intersection types work? </summary>

```ts
// union
type Status = "success" | "error" | "loading";

function handle(status: Status) {
    if (status === "success") console.log("Done!");
    else console.log("Still processing...");
}

let code: string | number;
code = "OK";   // ✅
code = 200;    // ✅
```

```ts
// intersection
interface User {
    name: string;
}

interface Admin {
    role: string;
}

type AdminUser = User & Admin;

const person: AdminUser = {
    name: "Anurag",
    role: "Admin",
};

```

</details>

####
<details>
<summary> 🟩 Explain type guards and narrowing. </summary>

Type Guards are runtime checks that let TypeScript know the specific type of a variable within a certain scope.
They are the foundation of type narrowing — the process where TypeScript refines a union or broad type into a more specific one based on logic.

```ts
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // value: string
    } else {
        console.log(value.toFixed(2));    // value: number
    }
}
// TypeScript automatically narrows the type inside each branch.
```

</details>

####
<details>
<summary> 🟩 How to define discriminated unions. </summary>

A Discriminated Union (also called a Tagged Union) is a union of object types that all share a common literal property — called the discriminant.
TypeScript uses this shared property to narrow the type automatically inside conditional logic.

```ts
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; side: number }
  |  { kind: "rectangle"; width: number; height: number };

function area(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.width * shape.height;
    }
}
// TypeScript automatically narrows the type of shape inside each case because it checks the discriminant property (kind).
```

</details>

####
<details>
<summary> 🟩 What are enums and const enums? </summary>

Enums (short for Enumerations) are a TypeScript feature that lets you define a named set of constant values — improving code readability and intent clarity.

```ts
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right   // 3
}

console.log(Direction.Up);    // 0
console.log(Direction[0]);    // "Up"

enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}
```

</details>

####
<details>
<summary> 🟩 What is “declaration merging”? </summary>

Declaration merging is a TypeScript feature where the compiler automatically combines multiple declarations of the same name into a single definition.

```ts
interface User {
    name: string;
}

interface User {
    age: number;
}

const person: User = { name: "Anurag", age: 30 }; // ✅ Works

// next example
function greet(name: string): string;
function greet(age: number): string;
function greet(value: any): string {
    return `Hello ${value}`;
}

greet("Anurag");
greet(25);
// TypeScript merges the overload signatures to support multiple call patterns.
```

</details>

####
<details>
<summary> 🟩 How to handle third-party library typings (@types/*)? </summary>

TypeScript relies on type declaration files (.d.ts) to understand the shape (types) of JavaScript libraries.

If a library isn’t written in TypeScript, you can install its type definitions separately via the DefinitelyTyped repository — published under the @types/* scope.

</details>

####
<details>
<summary> 🟩 How does structural typing differ from nominal typing? </summary>

TypeScript uses structural typing, while languages like Java, C#, or Kotlin use nominal typing.

```ts
interface Point {
    x: number;
    y: number;
}

interface Coordinates {
    x: number;
    y: number;
}

const draw = (p: Point) => console.log(p.x, p.y);

const c: Coordinates = { x: 10, y: 20 };
draw(c); // ✅ Works — same structure
```

</details>

####
<details>
<summary> 🟩 What is the “never” type used for? </summary>

The never type represents values that should never occur — it indicates that a function never returns or a code path is impossible to reach.

```ts
function error(message: string): never {
    throw new Error(message); // function never completes normally
}
```

</details>

####
<details>
<summary> 🟩 What is keyof and typeof usage? </summary>

- `keyof` — Extract Keys from a Type
```ts
interface User {
    id: number;
    name: string;
    isAdmin: boolean;
}
```

- `typeof` — Get Type from a Value
```ts
const person = {
  name: "Anurag",
  age: 30,
};

type PersonType = typeof person;

type UserKeys = keyof User; 
```

</details>

####
<details>
<summary> 🟩 How does TS compile to JS (transpilation pipeline)? </summary>

TypeScript doesn’t run directly in browsers or Node.
It must first be transpiled (compiled + transformed) into plain JavaScript.

Type annotations are completely removed — only plain JS remains.

</details>

####
<details>
<summary> 🟩 What are ambient declarations (declare module)? </summary>

Ambient declarations tell TypeScript about code that exists elsewhere (like in external JS libraries or runtime environments) — without actually implementing it.

```ts
// globals.d.ts
declare const VERSION: string;

// main.ts
console.log(VERSION); // ✅ No error — TS knows VERSION exists
```

</details>
