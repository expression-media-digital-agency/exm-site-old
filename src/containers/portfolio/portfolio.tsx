import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import CreateSolution from '../../components/create-solution/CreateSolution';
import MobileLogo from 'components/mobile-logo/mobile-logo';

const Portfolio: NextFunctionComponent<{}> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Expression Media | Portfolio</title>
      </Head>

      <header className="header">
        <div className="container">
          <MobileLogo/>
          <div className="row contact">
            <div className="col-sm-7">
              <h1 className="heading-one animated fadeIn delay-0.5s" >Our Works</h1>
              <p className="paragraph-two">We create quality experience and satisfaction.</p>
            </div>
            <div className="col-sm-5 animated fadeIn delay-2s">
              <div className="text-center">
                <img src="/static/img/svg/ourwork.svg" className="img-fluid mt-5" alt="projects"/>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">

<section className="projects">
<div className="container">
  <div className="row">
    <div className="col-sm-6 text-left">
      <h4 className="heading-four">Projects <p className="paragraph-four">We work hand in hand with brands creating great experience.</p></h4>
    </div>
    <div className="col-sm-6"></div>
  </div>
  <div className="row">
  <div className="card-columns">
    <div className="card">
      <a href="">
      <img className="card-img" src="/static/img/jpg/Corporate-Brand-Identity-Mockup1.jpg" alt="Card image"/>
      </a>
    </div>
    <div className="card">
      <a href="">
      <img className="card-img" src="/static/img/jpg/Rubber Stamp.jpg" alt="Card image"/>
      </a>
    </div>
    <div className="card">
      <a href="">
      <img className="card-img" src="/static/img/jpg/sticker.jpg" alt="Card image"/>
      </a>
    </div>
    <div className="card">
      <a href="">
      <img className="card-img" src="/static/img/jpg/sticker.jpg" alt="Card image"/>
      </a>
    </div>
    <div className="card">
      <a href="">
      <img className="card-img" src="/static/img/jpg/Corporate-Brand-Identity-Mockup1.jpg" alt="Card image"/>
      </a>
    </div>
    <div className="card">
      <a href="">
      <img className="card-img" src="/static/img/jpg/Rubber Stamp.jpg" alt="Card image"/>
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

export default Portfolio;