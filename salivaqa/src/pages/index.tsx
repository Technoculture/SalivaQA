import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export default function Home () {
  return (
    <>
      <Head>
        <title>Saliva QA</title>
        <meta name="description" content="Question Answer Interface built on LLMs and SalivaDB to answer questions realted to Human Saliva." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Saliva QA</div>
    </>
  );
}
