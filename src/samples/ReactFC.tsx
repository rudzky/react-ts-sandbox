const HeadingFC: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;
const code = `const HeadingFC: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;`;
const usage = `<HeadingFC title="Hello There" />`;
export { HeadingFC as Heading, code as HeadingCode, usage as HeadingUsage };
