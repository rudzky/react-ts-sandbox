/*eslint-comments/disable-enable-pair */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-key */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prettier/prettier */

import { ReactNode, useEffect } from 'react';
import Prism from 'prismjs';

import * as ReactFC from './ReactFC';
import * as ConventionalProps from './ConventionalProps';
import * as DefaultProps from './DefaultProps';
import * as FunctionalComponent from './FunctionalProps';
import * as Generics from './Generics';
import * as ClassComponent from './ClassComponent';

const samples = [
  {
    title: 'ReactFC - odradzany sposób',
    subtitle: "Diffrences from the 'normal function' version:",
    args: [
      <p>
        React.FunctionalComponent is explicit about the return type, while the
        normal function version is implicit {'('}or else needs additional
        annotation{')'}.
      </p>,
      <p>
        It provides typechecking and autocomplete for static properties like
        displayName, propTypes, and defaultProps.
      </p>,
      <p>
        Note that there are some known issues using defaultProps with
        React.FunctionComponent. See this{' '}
        <a
          href="https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/issues/87"
          target="_blank"
          rel="noreferrer"
        >
          issue
        </a>{' '}
        for details. We maintain a separate defaultProps section you can also
        look up.
      </p>,
      <p>Might be problematic with children</p>,
    ],
    isWrong: true,
    code: ReactFC.HeadingCode,
    usages: [ReactFC.HeadingUsage],
    components: [<ReactFC.Heading title="Hello There" />],
  },
  {
    title: 'Conventional Props',
    subtitle: null,
    args: [<p>Just normal props</p>],
    isWrong: false,
    code: ConventionalProps.HeadingCode,
    usages: [ConventionalProps.HeadingUsage],
    components: [<ConventionalProps.Heading title="What is up?" />],
  },
  {
    title: 'Conventional Props with children',
    subtitle: null,
    args: [],
    isWrong: false,
    code: ConventionalProps.HeadingWithContentCode,
    usages: [ConventionalProps.HeadingWithContentUsage],
    components: [
      <ConventionalProps.HeadingWithContent>
        Some text inside Heading tag
      </ConventionalProps.HeadingWithContent>,
    ],
  },
  {
    title: 'Default Props',
    subtitle: null,
    args: [],
    isWrong: false,
    code: DefaultProps.code,
    usages: [DefaultProps.usage],
    components: [
      <DefaultProps.Container>
        There&apos;s should be a default text above me
      </DefaultProps.Container>,
    ],
  },
  {
    title: 'Functional Props',
    subtitle: null,
    args: [],
    isWrong: false,
    code: FunctionalComponent.code,
    usages: [FunctionalComponent.usage],
    components: [
      <FunctionalComponent.Container
        header={(visible: number) =>
          visible % 2 ? 'I am visible cuz counter is even now' : null
        }
      >
        {(num: number) => <div>Today&apos;s number is {num}</div>}
      </FunctionalComponent.Container>,
    ],
  },
  {
    title: 'Generics',
    subtitle: null,
    args: [],
    isWrong: false,
    code: Generics.code,
    usages: Generics.usage,
    components: [
      <Generics.List
        items={['Jack', 'Sadie', 'Donald', 'Peter']}
        render={(item: string) => <div>{item}</div>}
      />,
      <Generics.List
        items={[true, false, false, true, false]}
        render={(item: boolean) => <div>{item ? 'true' : 'false'}</div>}
      />,
      <Generics.List
        items={[<p>Para 1</p>, <p>Para 2</p>, <p>Para 3</p>]}
        render={(item: ReactNode) => <div>{item}</div>}
      />,
    ],
  },
  {
    title: 'Class Component',
    subtitle: null,
    args: [],
    isWrong: false,
    code: ClassComponent.code,
    usages: [ClassComponent.usage],
    components: [
      <ClassComponent.Component title="Hello from Class Component" />,
    ],
  },
];

function Samples() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="samples">
      {samples.map(
        ({ title, subtitle, args, isWrong, code, usages, components }) => (
          <article className="sample" key={title}>
            <section className="description">
              <h1 className={isWrong ? 'wrong' : undefined}>{title}</h1>
              <h2>{subtitle}</h2>
              <ol>
                {args.map((arg, idx) => (
                  <li key={idx}>{arg}</li>
                ))}
              </ol>
            </section>
            <section className="code">
              <pre>
                <code className="language-javascript">{code}</code>
              </pre>
              {usages && <p>Usage</p>}
              {usages.map((usage, idx) => (
                <pre key={idx}>
                  <code className="language-javascript">{usage}</code>
                </pre>
              ))}
              {components.length && <p>Result</p>}
              {components.map((component, idx) => (
                <div className="usage" key={idx}>
                  {component}
                </div>
              ))}
            </section>
          </article>
        )
      )}
    </section>
  );
}

export default Samples;
