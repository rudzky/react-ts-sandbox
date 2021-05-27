import { ReactElement, ReactNode } from 'react';

function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function HeadingWithContent({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h1>{children}</h1>;
}

const HeadingCode = `function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}`;

const HeadingWithContentCode = `function HeadingWithContent({
    children,
  }: {
    children: ReactNode;
  }): ReactElement {
    return <h1>{children}</h1>;
  }`;

const HeadingUsage = `<Heading title="What is up?" />`;

const HeadingWithContentUsage = `<HeadingWithContent>Some text in Heading tag</HeadingWithContent>`;

export {
  Heading,
  HeadingWithContent,
  HeadingCode,
  HeadingWithContentCode,
  HeadingUsage,
  HeadingWithContentUsage,
};
