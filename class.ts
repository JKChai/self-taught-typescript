// parent
class Base {
  greet() {
    console.log("Hello, world!");
  }
}

// child
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d = new Derived();
d.greet();
d.greet("reader");

// Alias the derived instance through a base class reference
const b: Base = d;
// No problem
b.greet();
// Become a problem for TS compiler b/c var b referenced to the parent type
// however, JavaScript will still run it
b.greet("John");
