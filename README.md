# Self Taught TypeScript

#### Note

TypeScript helps in development process before codes get compiled but not during runtime, static type check.

Core feature: Type system; identify the data type of a variable or parameter by using a type hint. 

To install newest version of TypeScript via windows, do `npm install -g typescript`

#### JS & TS differences

* JavaScript uses dynamic type, that is, resolving at runtime
* TypeScript uses static type, that is, type set during development

#### Type of Declarations

- `var` can be redeclared and updated (globally or function scoped)
- `let` can be updated but not redeclared (block scoped)
- `const` cannot be updated or redeclared (block scoped)

#### Most Common Concept

* [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) - Based on Resusable concept; being able to create a component that can work on variety of types is known as generics, able to reuse the component with their own types. For example, the function below `identity` is say to be generic

```TS
function identify<Type>(arg: Type): Type {
    return arg;
}

// 2 methods to use it
// explicit
let output = identity<string>("myString");

// type argument inference
let output = identity("myString");
```

https://stackoverflow.com/questions/49622045/in-typescript-what-does-t-mean

* [Modules](https://www.typescriptlang.org/docs/handbook/modules.html#export) - Modules are executed in their own scope, not in the global scope

`export` & `import` are 2 important concepts in this case.

* [Type Assertion](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) - Happened during compile time telling Type Script that the types assigned should be trusted. This rules prevents "impossible" coercions.

```TS
// Can be done in 2 ways
// For example, getting something with html type
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// or use it with Angle Bracket <>
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

#### Keywords to Understand

## Additional TypeScript features

These are not found in JavaScript

* Interfaces
* Namespaces
* Generics
* Abstract classes
* Data modifiers
* Optionals
* Function overloading
* Decorators
* Type utils
* readonly keyword 

