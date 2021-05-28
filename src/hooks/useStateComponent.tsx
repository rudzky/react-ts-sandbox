import { useState } from 'react';

function UseStateComponent() {
  const [arr, setArray] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button onClick={() => setArray((prev) => [...prev, prev.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => setName('Johnatan')}>Set Name</button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
}

export default UseStateComponent;
