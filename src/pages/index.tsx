import Head from 'next/head';
import { FC } from 'react';
import { Footer } from '../components/Footer';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Project Example</title>
      </Head>
      <main className="container mx-auto">
      </main>
      <Footer />
    </>
  );
};

export default Home;
