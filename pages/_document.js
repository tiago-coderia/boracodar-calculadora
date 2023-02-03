import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
        />
      </Head>
      <body className="flex justify-center items-center h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
