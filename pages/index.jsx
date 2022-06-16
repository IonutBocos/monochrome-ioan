import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monochrome</title>
      </Head>

      <header className="header">
        Hello
        <img src="/images/banner.png" alt=""></img>
        <i className="fa-brands fa-youtube"></i>
      </header>

      <main className="content"></main>

      <footer className="footer"></footer>
    </div>
  );
}
