import React from 'react';
import App, { Container } from 'next/app';

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : null)
      }
    };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <Component {...pageProps} router={{ ...router }} />
      </Container>
    );
  }
}

export default CustomApp;
