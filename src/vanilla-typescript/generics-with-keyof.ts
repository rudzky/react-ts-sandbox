function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  {
    name: 'Akita',
    age: 3,
  },
  {
    name: 'Husky',
    age: 5,
  },
  {
    name: 'Pitbull',
    age: 9,
  },
];

console.log(pluck(dogs, 'age'));
console.log(pluck(dogs, 'name'));

// ||
// ||
// ||

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent('addToCart', {
  user: 'Julia',
  time: 10,
  productID: 'Foo',
  quantity: 1,
});

sendEvent('checkout', { time: 20, user: 'Bobby' });

// Generics with keyof | my own example

interface CommentArticle {
  id: number;
  comment: string;
}

interface Interactions {
  commentAsAdmin: CommentArticle & { password: string };
  commentAsUser: CommentArticle;
}

function comment<T extends keyof Interactions>(
  commentType: T,
  commentParams: Interactions[T]
): void {
  console.log([commentType, commentParams]);
}

comment('commentAsUser', { id: 10, comment: "That's so cool" });
comment('commentAsAdmin', {
  id: 10,
  comment: 'Really good - Admins Team',
  password: 'zaq1@WSX',
});
