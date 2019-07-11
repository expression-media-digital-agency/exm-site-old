import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import { Router } from 'routes';

import { composeClasses } from 'utils/generic';
import Button, { ButtonTypes } from 'components/Button/Button';

const About: NextFunctionComponent<{}> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>EXM | About</title>
      </Head>

      <main>
        <h1> front temp alive</h1>
      </main>
    </>
  );
};

export default About;
