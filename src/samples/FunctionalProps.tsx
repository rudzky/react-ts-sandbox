import { ReactNode, useState } from 'react';

function Functional({
  header,
  children,
}: {
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [count, setCount] = useState<number>(1);

  return (
    <div>
      {header && <h2>{header?.(count)}</h2>}
      <div>{children(count)}</div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      </div>
    </div>
  );
}

const code = `function TextWithNumber({
    header,
    children,
  }: {
    header?: (num: number) => ReactNode;
    children: (num: number) => ReactNode;
  }) {
    const [count, setCount] = useState<number>(1);

    return (
        <div>
        {header && <h2>{header?.(count)}</h2>}
        <div>{children(count)}</div>
        <div>
            <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
        </div>
        </div>
    );
}`;

const usage = `<Functional header={(visible: number) =>
  visible % 2 ? 'I am visible cuz counter is even now' : null
}>
    {(num: number) => <div>Today&apos;s number is {num}</div>}
</Functional>`;

export { Functional as Container, code, usage };
