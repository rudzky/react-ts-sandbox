/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
interface MyUser {
  name: string;
  id: number;
  email?: string;
  phone?: string;
}

// Partial tworzy typ z wszystkimi propsami opcjonalnymi
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: 'Jack',
      id: 624,
      email: 'what@is.com',
    },
    {
      email: 'well@is.com',
    }
  )
);

//Make all props required
type RequiredMyUser = Required<MyUser>;

//Pick given props
type JustEmailAndName = Pick<MyUser, 'email' | 'name'>;

//Omit<Type, Keys> tworzy obiekt(jeden) z pominieciem własciwosci [Keys]
type UserWithoutId = Omit<MyUser, 'id'>;

//Record<Keys, Type> tworzy obiekt(jeden) w formacie { [Keys]: Type }
const mapById = (users: MyUser[]): Record<MyUser['id'], MyUser> => {
  return users.reduce((acc, v) => {
    return {
      ...acc,
      [v.id]: v,
    };
  }, {});
};

const mapByIdentifier = (users: MyUser[]): Record<string, UserWithoutId> => {
  return users.reduce((acc, v) => {
    const { id, ...rest } = v;
    return {
      ...acc,
      [id]: rest,
    };
  }, {});
};

console.log(
  mapByIdentifier([
    {
      name: 'Ed',
      id: 2,
    },
    {
      name: 'Edd',
      id: 1,
    },
    {
      name: 'Eddy',
      id: 3,
    },
  ])
);
