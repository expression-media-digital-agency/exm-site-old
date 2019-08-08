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
              <h1 className="heading-one animated fadeIn delay-2s"> We Create <br/> Digital Solutions</h1>
              <div>
                <Link href="/contact">
                  <a className="btn-get-started hvr-shadow-radial animated fadeInUp delay-3s">
                    Get Started
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="text-center animated fadeIn delay-2s">
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
        <section id="services" className="services">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text-center">
                <img src="/static/img/svg/brand.svg" className="img-fluid" alt="branding-img"/>
              </div>
              <div className="col-sm-6">
                <h2 className="heading-two">Branding</h2>
                <p className="paragraph-one">Our team of Creative individuals are here to see 
                to it that your desire is satisfied by giving 
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
                 to it that your desire is satisfied by giving 
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
                by giving you exactly what you want.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="create-solution">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <h4 className="heading-four">Need to Create a Solution? <p className="paragraph-four">Let's discuss your next project</p></h4>
                <p className="paragraph-five">Our team of creatives are ready to help, you can click on
the button to get started.</p>
              </div>
              <div className="col-sm-3">
                <Link href="/contact">
                  <a className="btn-get-started hvr-shadow-radial">
                    Get Started
                  </a>
                </Link>
                
              </div>
            </div>
          </div>
        </section>
        <section className="projects">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text-left">
                <h4 className="heading-four">Projects <p className="paragraph-four">We work hand in hand with brands, creating great experience.</p></h4>
              </div>
              <div className="col-sm-6"></div>
            </div>
            <div className="row">
            <div className="card-columns">
              <div className="card">
                <a href="">
                <img className="card-img" src="/static/img/png/projects1.png" alt="Card image"/>
                </a>
              </div>
              <div className="card">
                <a href="">
                <img className="card-img" src="/static/img/png/projects2.png" alt="Card image"/>
                </a>
              </div>
              <div className="card">
                <a href="">
                <img className="card-img" src="/static/img/png/projects2.png" alt="Card image"/>
                </a>
              </div>
              <div className="card">
                <a href="">
                <img className="card-img" src="/static/img/png/projects1.png" alt="Card image"/>
                </a>
              </div>
              <div className="card">
                <a href="">
                <img className="card-img" src="/static/img/png/projects1.png" alt="Card image"/>
                </a>
              </div>
              <div className="card">
                <a href="">
                <img className="card-img" src="/static/img/png/projects2.png" alt="Card image"/>
                </a>
              </div>
            </div>
                
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
