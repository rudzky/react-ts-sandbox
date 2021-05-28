import { useEffect, useMemo, useState } from 'react';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

type Users = User[];

export interface People {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Users;
  support: {
    url: string;
    text: string;
  };
}

function useFetchData<DataType, ResponseType extends { data: DataType }>(
  url: string
): {
  data: DataType | null;
  done: boolean;
} {
  const [usersData, setUsersData] = useState<DataType | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then(({ data: respData }: ResponseType) => {
        setUsersData(respData);
        setDone(true);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [url]);

  return {
    data: usersData,
    done,
  };
}

function CustomHookComponent() {
  const { data, done } = useFetchData<Users, People>(
    'https://reqres.in/api/users?page=2'
  );
  const usersWithS = useMemo(
    () => (data || []).filter((user) => user.last_name.includes('s')),
    [data]
  );

  return (
    <div>
      <p>{done ? 'done' : 'nope'}</p>
      <ul>
        {data &&
          data.map(({ id, first_name, last_name }) => (
            <li key={id}>
              {first_name} {last_name}
            </li>
          ))}
      </ul>
      <ul>
        {usersWithS &&
          usersWithS.map(({ id, first_name, last_name }) => (
            <li key={id}>
              {first_name} {last_name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CustomHookComponent;
