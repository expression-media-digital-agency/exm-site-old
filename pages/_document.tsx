import React from 'react';
import Document, {
  Html, Head, Main, NextScript, NextDocumentContext, DefaultDocumentIProps,
} from 'next/document';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';

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

        <body>
          <NavBar/>
          <Main />
          <NextScript />
          <Footer/>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" ></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
