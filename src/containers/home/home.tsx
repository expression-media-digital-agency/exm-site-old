import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import { Router } from 'routes';

import { composeClasses } from 'utils/generic';
import Button, { ButtonTypes } from 'components/Button/Button';

const Home: NextFunctionComponent<{}> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Front Temp</title>
      </Head>

      <main>
        <h1> front temp alive</h1>
      </main>
    </>
  );
};

export default Home;
