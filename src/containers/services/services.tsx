import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import CreateSolution from '../../components/create-solution/CreateSolution';

const Services: NextFunctionComponent<{}> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>EXM | Services</title>
      </Head>

      <header className="header">
        <div className="container">
          <div className="row contact">
            <div className="col-sm-7">
              <h1 className="heading-one animated fadeIn delay-2s" >Our services</h1>
              <p className="paragraph-two"> </p>
            </div>
            <div className="col-sm-5 animated fadeIn delay-2s">
              <div className="text-center">
                <img src="/static/img/svg/servicewa.svg" className="img-fluid" alt="knowus-img"/>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">

      <section className="curly-img" id="curly-img">
      <img src="/static/img/svg/curvy.svg" className="img-fluid" alt="curly-img"/>
  </section>

  <section id="services" className="services">
    <div className="container">
      <div className="row">
        <div className="col-sm-4 text-center">
        <h2 className="heading-header">Branding</h2><br></br>
          <img src="/static/img/svg/brand.svg" className="img-fluid" alt="branding-img"/>
        </div>
        <div className="col-sm-4 text-center">
        <h2 className="heading-header">Digital Marketing</h2>
          <img src="/static/img/svg/marketing1.svg" className="img-fluid" alt="branding-img"/>
        </div>
        <div className="col-sm-4 text-center">
        <h2 className="heading-header">Web Design</h2><br></br>
          <img src="/static/img/svg/softdev.svg" className="img-fluid" alt="branding-img"/>
        </div>
      </div>
    </div>
  </section>      
        <CreateSolution/>
      </main>
    </>
  );
};

export default Services;