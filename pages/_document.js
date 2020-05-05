import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://restcountries.eu"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}
