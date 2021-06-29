import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <meta
          name="naver-site-verification"
          content="140cd4f2abecd071acede4d5ce74ce06413fe120"
        />
        <meta property="og:title" content="코드캠프1기 사이트!!"></meta>
        <meta
          property="og:image"
          content="https://dullyshin.github.io/2018/08/30/HTML-imgLink/#lg=1&slide=0"
        ></meta>
        <meta
          property="og:description"
          content="코드캠프1기들 모여주세요!!!"
        ></meta> */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-42DW6XJ4CY"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-42DW6XJ4CY');
          `,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
