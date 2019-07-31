import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import CreateSolution from '../../components/create-solution/CreateSolution';

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
              <h1 className="heading-one animated fadeIn delay-2s" >Digital Solutions for companies</h1>
              <p className="paragraph-two">The new era of digital transformation of your company</p>
            </div>
            <div className="col-sm-5 animated fadeIn delay-2s">
              <div className="text-center">
                <img src="/static/img/svg/knowus2.svg" className="img-fluid" alt="knowus-img"/>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        
      <section className="know-us">
      <div className="container-fluid">
        <div className="row">
            
            <div className="col-sm-12 text text-center">
              <p className="paragraph-three">Digital Solutions respond to the diverse business needs with cutting-edge technologiesthat allow us to delve into the digital transformation of our customers, always focusingon the transformation of the business processes and specific needs.
              <br/>
              <br/>
              <hr/>
              <br/>
              ExM works to explore all the resources and digital trends that the market offers to develop your business through different IT solutions both cloud and on-premise: digitalization of processes, web or mobile applications, collaborative environments and content management, among others. These digital solutions allow companies and businesses to continue advancing on the path to digital transformation hence giving voice and visibility to their business.
              <br/>
              <br/>
              <hr></hr>
              <br/>
              Our dynamic team is composed of different complementary profiles, strategists, developers, managers, creatives, all at the service of your company and we make a point of establishing a real relationship of trust with our customers.
              </p>
            </div>
        </div>
      </div>
    </section>

        <section className="know-us">
          <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 about text-center">
                  <h2 className="heading-three">About Us</h2>
                  <hr className="underline"/>
                </div>
                <div className="col-sm-6 text text-center">
                  <p className="paragraph-three">Are you looking for a dynamic team that can transform your business into a digital solution that will make your audience and customers patronise your service? Look no further for ExM has got you covered.
                  <br/>
                  <br/>
                  At ExM, we utilise technologies to create, develop and integrate effective tools to serve your business. Our team puts its expertise at your disposal and offers a quality service to guide you, accompany you and to realize your business projects on all digital media.
                  </p>
                </div>
            </div>
          </div>
        </section>
        <section className="know-us">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text text-center">
              <p className="paragraph-three">Small or big projects, ExM manages each mission with the same requirement of quality, it is involved in your project, appropriates it and aims at your objectives. To respond to the diverse needs of your business, our team of experts designs and develops these solutions, using cutting-edge technologies</p>
              </div>
              <div className="col-sm-6 mission text-center">
                <h2 className="heading-three">OUR SERVICES</h2>
                <hr className="underline"/>
              </div>
            </div>
          </div>
        </section>
        <CreateSolution/>
      </main>
    </>
  );
};

export default About;