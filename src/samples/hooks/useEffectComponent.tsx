import { useEffect, useState } from 'react';

function UseEffectComponent() {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{value}</div>;
}

export default UseEffectComponent;
