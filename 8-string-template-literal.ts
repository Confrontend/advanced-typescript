// Example 1

// type BrowserEvent = "onclick" | "onmouseover" | "onchange";
type BrowserEvent = `on${string}`;

function parseEvent(event: BrowserEvent) {}

parseEvent("onClick");
// wont work:
parseEvent("click");

type UserInfo = {
  firstName: string;
  lastName: string;
  age: number;
};

// Example 2
type ChangeEvent<T> = keyof T extends string
  ? `${Capitalize<Lowercase<keyof T>>}Changed`
  : never;
function on<T>(obj: T, changeEvent: ChangeEvent<T>) {}
// ?!
on({ focus: 1 }, "FocusChanged");
