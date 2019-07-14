import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import Link from 'next/link';

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
              <h1 className="contact-heading">
                Get in touch
              </h1>
              <p className="contact-paragraph">
              Expression Media also called “ExM”, partners with businesses and organizations to assist them focus on the core of their businesses. 
              </p>
            </div>
            <div className="col-sm-5">

            </div>
          </div>
        </div>
      </header>

      <main className="contact-main">
        <section className="contact-form">
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
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="text-right">
                <button type="submit" className="btn btn-primary">Submit</button>

                </div>
              </form>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-create-solution">
          
        </section>
      </main>
    </>
  );
};

export default Contact;
