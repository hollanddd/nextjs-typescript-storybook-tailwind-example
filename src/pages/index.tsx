import Head from 'next/head';
import { FC } from 'react';
import { Pager } from '../components/Pager';
import { Footer } from '../components/Footer';
import { Search } from '../components/Search';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Project Example</title>
      </Head>
      <Search placeholder="start here" />
      <Pager />
      <main className="container mx-auto">
      </main>
      <Footer />
    </>
  );
};

export default Home;
