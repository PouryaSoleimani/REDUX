import { Html, Head, Main, NextScript } from "next/document";
import { RecoilRoot } from 'recoil';
export default function Document() {
  return (
    <RecoilRoot>
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </RecoilRoot>
  );
}
