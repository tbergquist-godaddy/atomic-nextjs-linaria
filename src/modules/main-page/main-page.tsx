import { css } from '@linaria/atomic';
import Image from 'next/image';

import Box from '../box/box';
import Heading from '../heading/heading';
import thisIsFine from './this-is-fine.jpeg';

const heading = css`
  background-image: linear-gradient(45deg, #f3ec78, #af4261);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s;

  &:hover {
    transform: scaleX(1.5) translateX(100px);
  }
`;

const image = css`
  transition: all 2s;
  &:hover {
    transform: rotate(360deg);
  }
`;

export default function MainPage(): JSX.Element {
  return (
    <div>
      <Heading className={heading} as="h1">
        Atomic css is cool
      </Heading>
      <Box mt="md">
        <Image className={image} src={thisIsFine} />
      </Box>
    </div>
  );
}
