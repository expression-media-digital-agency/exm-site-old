import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import { Router } from 'routes';
import Link from 'next/link';

const Contact: NextFunctionComponent<{}> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>EXM | Contact</title>
      </Head>
    </>
  );
};

export default Contact;
