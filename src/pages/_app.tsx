import { css } from '@linaria/core';

import Box from '../modules/box/box';
import Navbar from '../modules/navbar/navbar';

const GlobalStyle = css`
  :global() {
    :root {
      --space-md: 24px;

      --font-size-l: ${22 / 16}rem;
      --font-size-xl: ${26 / 16}rem;
      --font-size-xxl: ${32 / 16}rem;
    }
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    body {
      box-sizing: border-box;
      background-color: #f4f4f4;
    }
  }
`;

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <div className={GlobalStyle}>
      <Navbar />
      <Box mt="md">
        <Component {...pageProps} />
      </Box>
    </div>
  );
}
