import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import Link from 'next/link';


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
              <div>
                <Link href="/contact">
                  <a className="btn-get-started">
                    Get Started
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="text-center">
                <img src="/static/img/svg/pc-landing1.svg" className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="curly-img" id="curly-img">
            <img src="/static/img/svg/curvy.svg" className="img-fluid" alt="curly-img"/>
        </section>
        <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text-center">
                <img src="/static/img/svg/brand.svg" className="img-fluid" alt="branding-img"/>
              </div>
              <div className="col-sm-6">
                <h2 className="heading-two">Branding</h2>
                <p className="paragraph-one">Our team of Creative individuals are here to see 
                to it that your desire is satisfied by diving 
                you exactly what you want.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="heading-two">Digital Marketing</h2>
                <p className="paragraph-one">Our team of Creative individuals are here to see
                 to it that your desire is satisfied by diving 
                 you exactly what you want.</p>
              </div>
              <div className="col-sm-6 text-center">
                <img src="/static/img/svg/marketing1.svg" className="img-fluid" alt="digital-img"/>
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text-center">
                <img src="/static/img/svg/softdev.svg" className="img-fluid" alt="web-dev-img"/>
              </div>
              <div className="col-sm-6">
                <h2 className="heading-two">Software Development</h2>
                <p className="paragraph-one">Our team of Creative individuals are here to see
                 to it that your desire is satisfied 
                by diving you exactly what you want.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="create-solution">
          <div className="container">
            <div className="row">
              <div className="col-sm-10">
                <h4 className="heading-four">Need to Create a Solution? <p className="paragraph-four">Lets discuss your next project</p></h4>
                <p className="paragraph-five">Our team of creatives are ready to help, you can click on
the button to get started.</p>
              </div>
              <div className="col-sm-2">
                <Link href="/contact">
                  <a className="btn-get-started">
                    Get Started
                  </a>
                </Link>
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
