/*eslint-comments/disable-enable-pair */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-key */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prettier/prettier */

import * as ReactFC from './ReactFC';
import * as ConventionalProps from './ConventionalProps';

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
    usage: ReactFC.HeadingUsage,
    component: <ReactFC.Heading title="Hello There" />,
  },
  {
    title: 'Conventional Props',
    subtitle: null,
    args: [<p>Just normal props</p>],
    isWrong: false,
    code: ConventionalProps.HeadingCode,
    usage: ConventionalProps.HeadingUsage,
    component: <ConventionalProps.Heading title="What is up?" />,
  },
  {
    title: 'Conventional Props with children',
    subtitle: null,
    args: [],
    isWrong: false,
    code: ConventionalProps.HeadingWithContentCode,
    usage: ConventionalProps.HeadingWithContentUsage,
    component: (
      <ConventionalProps.HeadingWithContent>
        Some text inside Heading tag
      </ConventionalProps.HeadingWithContent>
    ),
  },
];

export default samples;
