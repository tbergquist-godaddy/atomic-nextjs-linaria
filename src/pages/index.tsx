import Head from 'next/Head';

import Container from '../modules/container/container';
import MainPage from '../modules/main-page/main-page';

export default function Index(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Atomic css</title>
      </Head>
      <MainPage />
    </Container>
  );
}
