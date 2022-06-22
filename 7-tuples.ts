// 1. Bekannte Länge
// 2. Der Typ jedes Elements im Tupel ist bekannt
type ATuple = [number, string];
function printPerson(...args: ATuple) {}

type StartsWithStringEndsWithString<T extends unknown[]> = [
  string,
  ...T,
  string
];

// type X1 = [string, string]
type X1 = StartsWithStringEndsWithString<[]>;
// type X2 = [string, number, number, string]
type X2 = StartsWithStringEndsWithString<[number, number]>;

// Example
type CallbackFunction = (err: string | undefined, result: any) => void;
type HasCallback<T extends unknown[]> = [...T, CallbackFunction];
type LoadFile = HasCallback<[string, "w" | "r" | "wt", string]>;

function loadFile(...args: LoadFile) {}
loadFile("./path", "w", "value to be written", (err, res) => {
  console.log("result", res);
  console.log("error", err);
});

// Example 2
function concat<T extends unknown[], U extends unknown[]>(
  array_1: [...T],
  array_2: [...U]
): [...T, ...U] {
  return [...array_1, ...array_2];
}
// overload 1 (inferred generics)
const t1 = concat([1, 2, "3", 4, 5], [6, 7, 8]);

// overload 2
const t2 = concat<string[], number[]>(["1", "2", "3"], [6, 7, 8]);

// Example 3 curry ...
