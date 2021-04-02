import '../styles/globals.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  const gtagScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', { page_path: window.location.pathname });
  `;
  const hotjarScript = `
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:${parseInt(process.env.NEXT_PUBLIC_HOTJAR_ID || '0', 10)},hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;
  return <>
    <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}/>
      <script dangerouslySetInnerHTML={{ __html: gtagScript }}/>
      <script dangerouslySetInnerHTML={{ __html: hotjarScript }}/>
    </Head>
    <Component {...pageProps} />
  </>;
}
