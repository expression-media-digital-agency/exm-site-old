import React from 'react';
import { NextFunctionComponent } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import CreateSolution from '../../components/create-solution/CreateSolution';

const About: NextFunctionComponent<{}> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>EXM | About</title>
      </Head>

      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <h1 className="heading-one animated fadeIn delay-2s">About Us</h1>
              <p className="paragraph-two">Get to know us</p>
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
                <img src="/static/img/svg/know.svg" className="img-fluid" alt="get to know us"/>
              </div>
            </div>
          </div>
        </div>
      </header>



      <main className="main">
       
      <section className="services">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text-center">
                <img src="/static/img/svg/about1.svg" className="img-fluid" alt="web-dev-img"/>
              </div>
              <div className="col-sm-6 text-center">
                <p className="paragraph-one">Digital Solutions respond to the diverse business needs with cutting-edge technologies that allow us to delve into the digital transformation of our customers, always focusing on the transformation of the business processes and specific needs.
                <br/>
                <br/>
                ExM works to explore all the resources and digital trends that the market offers to develop your business through different IT solutions both cloud and on-premise: digitization of processes, web or mobile applications, collaborative environments and content management, among others.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text-center">
                <p className="paragraph-one">These digital solutions allow companies and businesses to continue advancing on the path to digital transformation hence giving voice and visibility to their business.
                <br/>
                <br/>
                Our dynamic team is composed of different complementary profiles, strategists, developers, managers, creatives, all at the service of your company and we make a point of establishing a real relationship of trust with our customers.</p>
              </div>
              <div className="col-sm-6 text-center">
                <img src="/static/img/svg/about2.svg" className="img-fluid" alt="web-dev-img"/>
              </div>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text-center">
                <img src="/static/img/svg/about3.svg" className="img-fluid" alt="web-dev-img"/>
              </div>
              <div className="col-sm-6 text-center">
                <p className="paragraph-one">Are you looking for a dynamic team that can transform your business into a digital solution that will make your audience and customers patronise the services you render? Look no further, for ExM has got you covered.
                <br/>
                <br/>
                At ExM, we utilise technologies to create, develop and integrate effective tools to serve your business. Our team puts its expertise at your disposal and offers a quality service to guide you, accompany you and to realize your business projects on all digital media.</p>
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