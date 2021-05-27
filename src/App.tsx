import { ReactElement, ReactNode, useState, Component, useEffect } from 'react';
import Prism from 'prismjs';
import './sass/style.scss';
import samples from './samples';

// defaultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;

function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{children}</p>
    </div>
  );
}
Container.defaultProps = defaultContainerProps;

// Functional PROPS

function TextWithNumber({
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

//List <Generics> so we can pass more than one type of props
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

//Class component

class MyHeading extends Component<{
  title: ReactNode;
}> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>React Typescript Cool Stuff</h1>
      </header>

      <main className="examples">
        {samples.map(
          ({ title, subtitle, args, isWrong, code, usage, component }) => (
            <article className="examples__unit" key={title}>
              <section className="description">
                <h1 className={isWrong ? 'wrong' : undefined}>{title}</h1>
                <h2>{subtitle}</h2>
                <ul>
                  {args.map((arg, idx) => (
                    <li key={idx}>{arg}</li>
                  ))}
                </ul>
              </section>
              <section className="code">
                <pre>
                  <code className="language-javascript">{code}</code>
                </pre>
                <p>Usage</p>
                <pre>
                  <code className="language-javascript">{usage}</code>
                </pre>
                <p>Result</p>
                <div className="usage">{component}</div>
              </section>
            </article>
          )
        )}
      </main>

      <Container>Foo</Container>

      <TextWithNumber
        header={(visible: number) =>
          visible % 2 ? 'I am visible cuz counter is even now' : null
        }
      >
        {(num: number) => <div>Today&apos;s number is {num}</div>}
      </TextWithNumber>

      <List
        items={['Jack', 'Sadie', 'Donald', 'Peter']}
        render={(item: string) => <div>{item}</div>}
      />

      <List
        items={[true, false, false, true, true, false]}
        render={(item: boolean) => <div>{item ? 'true' : 'false'}</div>}
      />

      <List
        // eslint-disable-next-line react/jsx-key
        items={[<p>Para 1</p>, <p>Para 2</p>, <p>Para 3</p>]}
        render={(item: ReactNode) => <div>{item}</div>}
      />

      <MyHeading title="Hello from Class Component" />
    </div>
  );
}
