import { ReactNode } from 'react';

function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

const code = `function List<ListItem>({
    items,
    render,
}: {
    items: ListItem[];
    render: (item: ListItem) => ReactNode;
}) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{render(item)}</li>
            ))}
        </ul>
    );
}`;

const usage = [
  `
<List
  items={['Jack', 'Sadie', 'Donald', 'Peter']}
  render={(item: string) => <div>{item}</div>}
/>`,

  `<List
  items={[true, false, false, true, true, false]}
  render={(item: boolean) => <div>{item ? 'true' : 'false'}</div>}
/>`,

  `<List
  items={[<p>Para 1</p>, <p>Para 2</p>, <p>Para 3</p>]}
  render={(item: ReactNode) => <div>{item}</div>}
/>`,
];

export { List, code, usage };
