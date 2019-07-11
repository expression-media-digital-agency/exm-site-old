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

      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
            <h1 className="heading-one"> We Create <br/> Digital Solutions</h1>

            </div>
            <div className="col-sm-5">
              <div className="text-center">
                <img src="" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="curly-img" id="curly-img">
          <div>
            <img src="/static/img/svg/curvy.svg" className="img-fluid" alt="curly-img"/>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
