import { ReactNode } from 'react';
import { css } from '@linaria/atomic';
import { cx } from '@linaria/core';

type Size = 'md' | 'l';
type Props = {
  children: ReactNode;
  mt?: Size;
  className?: string;
};

const marginTopMd = css`
  margin-top: var(--space-md);
`;
const marginTop = {
  md: marginTopMd,
  lg: '',
};

export default function Box({ children, mt, className }: Readonly<Props>): JSX.Element {
  return <div className={cx(marginTop[mt!], className)}>{children}</div>;
}
