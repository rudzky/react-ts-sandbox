import { useEffect } from 'react';
import Prism from 'prismjs';
import './sass/style.scss';
import samples from './samples';

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
          ({ title, subtitle, args, isWrong, code, usages, components }) => (
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
      </main>
    </div>
  );
}
