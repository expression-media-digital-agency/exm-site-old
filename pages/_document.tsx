import React from 'react';
import Document, {
  Html, Head, Main, NextScript, NextDocumentContext, DefaultDocumentIProps,
} from 'next/document';

class MyDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext): Promise<DefaultDocumentIProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            content="width=device-width"
            name="viewport"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,600,700"
            rel="stylesheet"
          />
        </Head>

        <body className="wrapper">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
