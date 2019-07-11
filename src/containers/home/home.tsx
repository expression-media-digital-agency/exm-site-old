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
        <title>EXM | Digital Agency</title>
      </Head>

      <main>
        <button className="btn btn-primary">Nice</button>
        <h1> front temp alive</h1>
      </main>
    </>
  );
};

export default Home;