import { Component, ReactNode } from 'react';

class ClassHeading extends Component<{
  title: ReactNode;
}> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

const code = `class ClassHeading extends Component<{
    title: ReactNode;
  }> {
    render() {
      return <h1>{this.props.title}</h1>;
    }
  }`;

const usage = `<ClassHeading title="Hello from Class Component" />`;

export { ClassHeading as Component, code, usage };
