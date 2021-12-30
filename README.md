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

Notice that `<>` is used to assign type and is common for type assertion and [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html).

```TS
// Generics example
function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity<string>("myString");
```

As for generics, this help to locate the `Type`; although some prefer TypeScript *type assertion* by removing `<string>` for variable references; however, compiler may failed to detect type if the program is too complicated

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

## TypeScript core data types

| type | example | description |
|------|----|---|
|number| 1, 5.3, -10 | values inculding int & float |
|string | 'Hi', "Hi", `Hi` | text values |
|boolean | true, false | identifier |
|object | {age: 30} | as map value in key:value structure |
|array | [1, 2, 3] | can be flexible or strict |
| tuple | [1, "Hi"] | fixed-length array |
| Enum | enum {new, old} | automatically enumerated global constants identifier |
| any | * | no specific type assignments | 

* Use operator `|` for combining type, union type, e.g., `input: string | number` which means that input variable/argument can be a string or number type
* `type` is a TypeScript keyword for assigning data types to a variable known as type alias that can later declare to each variable
* `+` operator is a prefer way for converting any values referenced to a variable to a number type by assigning it before the variable, e.g., `+var` convert `var` into number
* TypeScript has a `void` type that JavaScript does not have for result of function that do not return any values
```TS
function printResult(num: number): void {
  console.log('Result: ' + num)
}
```
* `undefined` is a type in TypeScript but no common; it is use when the return values in a function or variables does not contain any data
* Another type, called `Function` type is use for declaring a function for a variable
```TS
let thisIsFunction: Function;
```
  * This help to declare the function early on before using it; however, a more common way of declaring a function is using anonymous function with arrow function
```TS
// without parameters
let thisIsFunction: () => number;

// with parameters
let thisIsFunction: (arg1: number, arg2: string) => number;
```
* Callback function is a very common function used in JavaScript & TypeScript. It is a function that act as a parameter for another function, which makes that function a higher-order function. In TypeScript, callback function allows to omit assigning type for the parameter because the type is assigned in the higher-order function that take callback. Note that callback is usually used to continue code execution after an asynchronous operations has completed - asynchronous function
```TS
function higherOrderFunction(arg1: number, arg2: number, callback: (arg1: number) => void) {
  const result = +arg1 + +arg2;
  // callback invokes in the outer function taking the variable
  callback(result);
};

higherOrderFunction(10, 20, (result) => {
  console.log(result);
});
```
* `unknown` type is similar to `any` type but more restrictive, i.e., flexible but have some type checking; e.g., declaring a variable with `unknown` cannot be assigned to another variable that was set with more restrictive type such as `string`; however, using if statment to check the variable type of `unknown` before assigning to a more restrictive type will work
```TS
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}
``` 
* `never` type is used when the function does not return anything and is usually used it with infinite loop or `throw` 

# TypeScript configuration

* Use `tsc --init` to initialize the `tsconfig.json` which is used for compiling
* Use `tsc --watch` or `tsc -w` to watch all typescript files, i.e., the scripts are compiled when saved
* Some common configuration keywords are `exclude` that exclude all files and directories specified; `include` that include specific files and directories specified; `files` to specified files to compile
* Use `ctrl + space` for auto-completion in VSC
* 