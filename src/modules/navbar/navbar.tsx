import { css } from '@linaria/atomic';
import Link from 'next/link';

const navClass = css`
  background-color: pink;
  padding: var(--space-md);
`;

const navLink = css`
  color: #fff;
  text-decoration: none;
  font-size: var(--font-size-l);

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar(): JSX.Element {
  return (
    <nav className={navClass}>
      <Link href="/">
        <a className={navLink}>Atomic-css</a>
      </Link>
    </nav>
  );
}
