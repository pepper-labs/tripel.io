import '../styles/globals.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  const gtagScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', { page_path: window.location.pathname });
  `;
  return <>
    <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}/>
      <script dangerouslySetInnerHTML={{ __html: gtagScript }}/>
    </Head>
    <Component {...pageProps} />
  </>;
}
