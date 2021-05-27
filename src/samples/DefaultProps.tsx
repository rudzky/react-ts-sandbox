import { ReactElement, ReactNode } from 'react';

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

const code = `const defaultContainerProps = {
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

Container.defaultProps = defaultContainerProps;`;

const usage = "<Container>There's should be a default text on left</Container>";

export { Container, code, usage };
