import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import MobileLogo from 'components/mobile-logo/mobile-logo';


const Home: NextFunctionComponent<{}> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Expression Media | Digital Agency</title>
      </Head>

      <header className="header">
        <div className="container">
          <MobileLogo/>
          <div className="row">
            <div className="col-sm-7">
              <h1 className="heading-one animated fadeIn delay-2s">Expression Media<br/>Digital Agency</h1>
              <p className="paragraph-two animated fadeIn delay-1s">Passion. Innovation. Creativity.</p>
              <div>
                <Link href="/contact">
                  <a className="btn-get-started hvr-shadow-radial animated fadeInUp delay-3s">
                    Get Started
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="text-center animated heading-img fadeIn delay-2s">
                <img src="/static/img/svg/man&woman.svg" className="img-fluid" alt=""/>
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
                <p className="paragraph-one">Our team makes your communication beautiful and intelligible. We clarify your message. We give meaning to your brand. We solve complex problems, but we do it with style and simplicity.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="heading-two">Digital Marketing</h2>
                <p className="paragraph-one">We help you to implement a digital marketing strategy that adapts to your business, allowing you to connect and interact with your current and potential customers.</p>
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
                <p className="paragraph-one">Our team takes the time in your company to draw the contours of your software to ensure ergonomics and a successful user experience. All these using the latest trends in software development.</p>
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
      </main>
    </>
  );
};

export default Home;
