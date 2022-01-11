// Different ways to declare function types

// 1 - assign any as type bt nt recommended
let a: any;

a = function(): void {
    console.log("It Works");
};

// 2 - assign Function keyword
let a: Function;

a = function(): void {
    console.log("It Works");
}


// 3 - arrow function; more specific
let a: (para: string) => string;

a = function(pass: string): string {
    return pass;
};

let newFunction: () => number;

newFunction = function() {
    return 5
}

// 4 - use type keyword
type avar = (name:string) => void;

const test: avar = (value:string) => {
    console.log(value);
};

// 5 - interface keyword
interface read {
    (name: string): string;
}

const test: read = (value: string) => value;