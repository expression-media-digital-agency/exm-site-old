import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import CreateSolution from '../../components/create-solution/CreateSolution';


const Contact: NextFunctionComponent<{}> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>EXM | Contact</title>
      </Head>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <h1 className="contact-heading  animated fadeIn delay-1s">
                Get in touch
              </h1>
              <p className="contact-paragraph  animated fadeIn delay-2s">
              Expression Media also called “ExM”, partners with businesses and organizations to assist them focus on the core of their businesses. 
              </p>
            </div>
            <div className="col-sm-5">

            </div>
          </div>
        </div>
      </header>

      <main className="contact-main">
        <section className="contact-form  animated fadeIn delay-3s">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 form-left-side">
                <h2 className="paragraph-four">
                  Contact Information
                </h2>
                <p ><span></span> Gibson House, No 12
Flatten building, Ile Ife.</p>
                <p><span></span> info@exmediaagency.com</p>
                <p><span></span> +234(0) 81 4945 6123</p>
              </div>
              <div className="col-sm-8 form-right-side">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Name"/>
                  </div>
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="company" placeholder="Company"/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/>
                  </div>
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="address" placeholder="Address"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <textarea className="form-control" id="textarea" placeholder="Message" rows="4"></textarea>
                  </div>
                </div>
                <div className="text-right">
                  <button type="submit" className="btn btn-footer">Send</button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </section>
        <section className="social-media">
          <div className="container">
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6 text-center">
                <h3 className="heading-four  animated fadeIn delay-1s">We are actively social</h3>

                <li className="icons  animated fadeIn delay-2s">
                  <span> <a href="" target="_blank"><img src="/static/img/svg/facebookic.svg" alt="facebook"/></a></span>
                  <span><a href="" target="_blank"><img src="/static/img/svg/instagramic.svg" alt="facebook"/></a></span>
                  <span><a href="" target="_blank"><img src="/static/img/svg/twitteric.svg" alt="facebook"/></a></span>
                  <span><a href="" target="_blank"><img src="/static/img/svg/linkedinic.svg" alt="facebook"/></a></span>
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
