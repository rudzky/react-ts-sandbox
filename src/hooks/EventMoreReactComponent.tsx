import { ReactNode } from 'react';

export interface HeadingProps {
  title: string;
}

export function Heading({ title }: HeadingProps) {
  return <h1>{title}</h1>;
}

export function List<ListItem>({
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

function TestComponent() {
  return (
    <div>
      <List items={['one', 'two', 'three']} render={(str) => <h5>{str}</h5>} />
      <Heading title="Hello" />
    </div>
  );
}

export default TestComponent;
