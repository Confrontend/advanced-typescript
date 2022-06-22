type MyOptional<T> = {
  [K in keyof T]?: T[K];
};

type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

type User = {
  id: number;
  name: string;
};
// id and number are now optional
type User2 = MyOptional<User>;
// id and number are now mandatory
type User3 = MyRequired<User>;

type MyRecord<T extends PropertyKey, U> = {
  [K in T]: U;
};
// 3 keys all with unknown type
type Obi = MyRecord<"a" | "b" | "c", unknown>;

//picking a sub type {id: number}
type pickedId = Pick<User, "id">;

// alternative without Pick
type MyPick<T, P extends keyof T> = {
  [K in P]: T[K];
};

type pickedId2 = MyPick<User, "name">;
