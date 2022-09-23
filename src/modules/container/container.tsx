import { ReactNode } from 'react';
import { css } from '@linaria/atomic';

const container = css`
  margin: 0 auto;
  max-width: 80%;

  @media (min-width: 750px) {
    max-width: 700px;
  }
  @media (min-width: 1020px) {
    max-width: 950px;
  }
  @media (min-width: 1300px) {
    max-width: 1100px;
  }
  @media (min-width: 1800px) {
    max-width: 1500px;
  }
`;

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Readonly<Props>): JSX.Element {
  return <div className={container}>{children}</div>;
}
