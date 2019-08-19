import React from 'react';
import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import CreateSolution from '../../components/create-solution/CreateSolution';
import MobileLogo from 'components/mobile-logo/mobile-logo';

const Story: NextFunctionComponent<{}> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Expression Media | Story</title>
      </Head> 

      <header className="header">
        <div className="container">
          <MobileLogo/>
          <div className="row contact">
            <div className="col-sm-7">
              <h1 className="heading-one animated fadeIn delay-2s" >Digital Solutions for companies</h1>
              <p className="paragraph-two animated fadeIn delay-1s">The new era of digital transformation of your company</p>
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
            <div className="row each-section">
                <div className="col-sm-6 text-center">
                  <img className="img-fluid" src="../../../static/img/svg/undraw_creative_team_r90h.svg" alt=""/>
                </div>
                <div className="col-sm-6 text text-center">
                  <p className="paragraph-three">
                  Are you looking for a dynamic team that can transform your business into a digital solution that will make your audience and customers patronise your service? Look no further for Expression Media has got you covered.
                  </p>

                </div>
            </div> 
            <div className="row each-section">
                
                <div className="col-sm-6 text text-center">
                  <p className="paragraph-three">
                  At Expression Media, we utilise technologies to create, develop and integrate effective tools to serve your business. Our team puts its expertise at your disposal and offers a quality service to guide you, accompany you and to realize your business projects on all digital media.
                  </p>

                </div>
                <div className="col-sm-6 text-center">
                  <img className="img-fluid" src="../../../static/img/svg/undraw_development_ouy3.svg" alt=""/>
                </div>
            </div> 
            <div className="row each-section">
                <div className="col-sm-6 text-center">
                  <img className="img-fluid" src="../../../static/img/svg/undraw_scrum_board_cesn.svg" alt=""/>
                </div>
                <div className="col-sm-6 text text-center">
                  <p className="paragraph-three">
                  Small or big projects, Expression Media manages each mission with the same requirement of quality, it is involved in your project, appropriates it and aims at your objectives. To respond to the diverse needs of your business, our team of experts designs and develops these solutions, using cutting-edge technologies.
                  </p>

                </div>
            </div> 
          </div>
        </section>
        <CreateSolution/>
      </main>
    </>
  );
};

export default Story;