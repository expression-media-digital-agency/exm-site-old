import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';


const About: NextFunctionComponent<{}> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>EXM | Story</title>
      </Head>

      <header className="header">
        <div className="container">
          <div className="row contact">
            <div className="col-sm-7">
              <h1 className="heading-one">Get to know us <p className="paragraph-two">Your Success becomes our story</p></h1>
            </div>
            <div className="col-sm-5">
              <div className="text-center custom-shadow">
                <img src="/static/img/svg/knowus.svg" className="img-fluid" alt="knowus-img"/>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="know-us">
          <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 about text-center">
                  <h2 className="heading-three underline">About</h2>
                </div>
                <div className="col-sm-6 text text-center">
                  <p className="paragraph-three">Our team of Creative individuals are here to see
                  to it that your desire is satisfied by diving 
                  you exactly what you want.</p>
                </div>
            </div>
          </div>
        </section>
        <section className="know-us">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text text-center">
              <p className="paragraph-three">Our team of Creative individuals are here to see
                 to it that your desire is satisfied by diving 
                 you exactly what you want.</p>
              </div>
              <div className="col-sm-6 mission text-center">
                <h2 className="heading-three underline">Mission</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="know-us">
          <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 vision text-center">
                  <h2 className="heading-three underline">Vision</h2>
                </div>
                <div className="col-sm-6 text text-center">
                <p className="paragraph-three">Our team of Creative individuals are here to see
                  to it that your desire is satisfied by diving 
                  you exactly what you want.</p>
                </div>
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
};

export default About;