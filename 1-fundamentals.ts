/**
 * - What is a type?
 *
 * A type is a classification of data that defines the operations that
 * can be done on that data, the meaning of the data, and the set of
 * allowed values.
 * Typing is checked by the compiler and/or run time to ensure the
 * integrity of the data, enforce access restrictions, and interpret the
 * data as meant by the developer.
 */

// -------------------------------------------------------------------

/**
 * - TypeScript is a superset of JavaScript
 * - Initiated by Microsoft on 2011. After ES5 and before ES6 release.
 */

// -------------------------------------------------------------------

/**
 * TypeScript - Ambients
 * Ambient declarations are a way of telling the TypeScript compiler that the actual source code exists elsewhere.
 * Ambient declarations are by convention kept in a type declaration file with following extension (d.ts)
 * Sample.d.ts
 * @see[Ambients](https://www.tutorialspoint.com/typescript/typescript_ambients.htm)
 */

// -------------------------------------------------------------------

/**
 * Arrays vs Tuples
 * as const
 */

const person = [39, "Stefan"]; // person: (string I number)ll
const [age, name1] = person; // age: string | number, name: string | number

const person2: [number, string] = [39, "Stefan"]; //person: [number, string]
const [age2, name2] = person; // age: number, name: string

const person3 = [39, "Stefan"] as const; // age: number, name: string

// -------------------------------------------------------------------

/**
 * Interface and type are basically the same thing with 1 difference: Declaration merging
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const a: Person = { name: "Hamed", age: 18 };

// -------------------------------------------------------------------

// Real world example

interface Window {
  x: number; // here we are extending (merging with) Window interface from typescript
}

const myWindow: Window = {} as any;
myWindow.location = ""; // access to properties of Window interface defined by typescript
myWindow.x = 2;

// type Window = {} -> Not allowed: Duplicate identifier 'Window'. types do not support Declaration merging

// -------------------------------------------------------------------

/**
 * Function types nad overloads
 */

type Result = {
  url: string;
  title: string;
  description: string;
};
// declarations
function search(query: string): Result[];
function search(query: string, scope: string[]): Result[];
// -------

// implementation
function search(query: string): Result[] {
  return [
    {
      url: "test",
      title: "test",
      description: "test",
    },
  ];
}

type SearchType = typeof search;
/**
 * type SearchType = {
    (query: string): Result[];
    (query: string, scope: string[]): Result[];
}
 */

// -------------------------------------------------------------------

/**
 * ???
 * this as first parameter will be used by ts compiler to infer this type
 */

const el = document.querySelector("input");
el?.addEventListener("change", handleInputChanged);
function handleInputChanged(this: HTMLInputElement) {
  console.log(this.value);
}
// handleInputChanged();

// -------------------------------------------------------------------

/**
 * TODO
 * valid although results is not passed in last line.  type script alow shortening the params
 */

 const results = [1, 2, 3, 4, 5, 6]
 type CallbackFn = (statusCode: number, results: number[]) => void
 function fetchResults(callback: CallbackFn) {
 // Get results somewhere magically
 //
 callback(200, results);
 }
 function handler(statusCode: number)
 if(statusCode === 200) {
 console. log( "Found results!")
 }
 
 fetchResults(handler)

// -------------------------------------------------------------------

/**
 * TODO
 * type substitution is also alowed- type CallbackFn returns void but handler returns boolean
 */

// -------------------------------------------------------------------
