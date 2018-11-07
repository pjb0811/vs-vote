import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import antDesign from 'antd/dist/antd.min.css';
import { ServerStyleSheet } from 'styled-components';
import customStyle from '../static/styles/index.less';

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <style dangerouslySetInnerHTML={{ __html: antDesign }} />
          <style>{customStyle}</style>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
