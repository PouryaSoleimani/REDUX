import { Html, Head, Main, NextScript } from "next/document";
import { RecoilRoot } from 'recoil';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="redux.svg" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
