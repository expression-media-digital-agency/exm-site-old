import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import CreateSolution from '../../components/create-solution/CreateSolution';
import ContactForm from 'components/contact-form';
import MobileLogo from 'components/mobile-logo/mobile-logo';


const Contact: NextFunctionComponent<{}> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Expression Media | Contact</title>
      </Head>
      <header className="header">
        <div className="container">
        <MobileLogo/>
          <div className="row">
            <div className="col-sm-12">
              <h1 className="contact-heading  animated fadeIn delay-1s">
                Get in touch
              </h1>
              <p className="contact-paragraph  animated fadeIn delay-2s">
              Expression Media partners with businesses and organizations to assist them focus on the core of their businesses. 
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="contact-main">
        <ContactForm/>
        <section className="social-media">
          <div className="container">
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6 text-center">
                <h3 className="heading-four  animated fadeIn delay-1s">We are actively social</h3>

                <li className="icons animated fadeIn delay-2s">
                <span><a href="https://www.facebook.com/exmdigitalagency/" target="_blank"><img src="/static/img/svg/facebookic.svg" alt="facebook"/></a></span>
                <span><a href="https://www.instagram.com/exmdigital/" target="_blank"><img src="/static/img/png/instagramwhite.png" alt="instagram"/></a></span>
                <span><a href="https://twitter.com/exmdigital" target="_blank"><img src="/static/img/svg/twitteric.svg" alt="twitter"/></a></span>
                </li>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        </section>
        <section className="contact-create-solution">
          <CreateSolution/>
        </section>
      </main>
    </>
  );
};

export default Contact;
