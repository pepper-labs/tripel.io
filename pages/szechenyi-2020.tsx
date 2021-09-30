import styles from '../styles/Szechenyi2020.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function () {
  return <div className={styles.container}>
    <Head>
      <title>Tripelio</title>
      <link rel="icon" href="/favicon.ico"/>
      <link rel="preload" href="/dashboard.webp" as="image"/>
    </Head>

    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <a><img src="/tripelio.svg" alt="Tripelio" width="150" height="42"/></a>
        </Link>
      </div>
    </nav>

    <div className={styles.map}/>

    <main className={styles.main}>
      <div className={styles.title}>
        <h1>SZÉCHENYI 2020 - TÁJÉKOZTATÁSI KÖTELEZETTSÉG</h1>
      </div>

      <div className={styles.content}>
        <section>
          <header>
            <h3>A kedvezményezett</h3>
          </header>

          <p>E-tourdesk Kft.</p>
        </section>

        <section>
          <header>
            <h3>Projekt címe</h3>
          </header>

          <p>Turisztikai értékesítési szoftver fejlesztése</p>
        </section>

        <section>
          <header>
            <h3>Szerződött támogatás összege</h3>
          </header>

          <p>15.000 Ft</p>
        </section>

        <section>
          <header>
            <h3>Projekt tervezett befejezési dátuma</h3>
          </header>

          <p>2021 Q4</p>
        </section>

        <section>
          <header>
            <h3>Projekt azonosítószáma</h3>
          </header>

          <p>GINOP-8.2.3-17 Specializált seed és pre-seed befektetési tőkealap</p>
        </section>

        <section>
          <header>
            <h3>Projekt tartalmának bemutatása</h3>
          </header>

          <p>
            Az E-tourdesk Kft. terméke a Tripelio egy testre szabható programajánló platform, mellyel szállásadók a
            vendégeik számára foglalható programokat tudnak ajánlani (látványosságok, túrák és aktivitások, éttermek és
            a szálloda saját szolgáltatásai). A vendégek a platformon keresztül meg tudják vásárolni az aktivitások egy
            részét, amelyből mind a szálloda, mind a Tripelio jutalékban részesül.
          </p>

          <p>
            A tőkebefektetést az E-tourdesk Kft. a piactér lefejlesztésére, és szállodai és szolgáltatói oldalának
            kialakítására fordítja. A Tripelio kínálat először a Balatonfüred - Tihany régióban, majd Budapesten vált
            elérhetővé.
          </p>
        </section>
      </div>
    </main>

    <Footer/>
  </div>;
}
