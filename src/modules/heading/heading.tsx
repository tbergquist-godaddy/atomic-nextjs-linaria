import { css } from '@linaria/atomic';
import { cx } from '@linaria/core';
import { ReactNode } from 'react';

const heading = css`
  font-size: var(--font-size-xxl);
`;

type Props = {
  children: ReactNode;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

export default function Heading({ children, as, className, ...rest }: Readonly<Props>): JSX.Element {
  const Component = as;
  return (
    <Component className={cx(heading, className)} {...rest}>
      {children}
    </Component>
  );
}
