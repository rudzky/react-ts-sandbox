import { useEffect, useState } from 'react';

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

function useFetchData(url: string): {
  dataX: Users | null;
  done: boolean;
} {
  const [dataX, setDataX] = useState<Users | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then(({ data }: People) => {
        setDataX(data);
        setDone(true);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [url]);

  return {
    dataX,
    done,
  };
}

function CustomHookComponent() {
  const { dataX, done } = useFetchData('https://reqres.in/api/users?page=2');

  return (
    <div>
      <p>{done ? 'done' : 'nope'}</p>
      <ul>
        {dataX &&
          dataX.map(({ id, first_name, last_name }) => (
            <li key={id}>
              {first_name} {last_name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CustomHookComponent;
