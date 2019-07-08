/* eslint-disable class-methods-use-this */
import React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import { PageTransition } from 'next-page-transitions'

// Styles
import 'normalize.css';
import 'styles/shared.css';

// Components
import { Router } from 'routes';

interface IAppState {
  loggedIn: boolean;
  events: string[];
}

class Root extends App<{}, IAppState>{
  constructor(props: any) {
    super(props)
    this.state = {
      loggedIn: false,
      events: [
        "load",
        "mousemove",
        "mousedown",
        "click",
        "scroll",
        "keypress",
        "keydown",
        "keyup",
        "scroll",
        "mouseover"
      ],
    }
  }

  public static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps, router } = this.props;
    return (
          <Container>
              <PageTransition timeout={300} classNames="page-transition">
                <Component {...pageProps} key={router.route} />
              </PageTransition>
          </Container>
    );
  }
}

export default Root;
