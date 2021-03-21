import Head from 'next/head';
import { FC } from 'react';
import { Pager } from '../components/Pager';
import { Footer } from '../components/Footer';
import { Search } from '../components/Search';
import { Stats } from '../components/Stats';

const stats = [
  { label: 'Downloads', metric: '144k' },
  { label: 'Subscribers', metric: '12.9k' },
  { label: 'Users', metric: '48.3k' },
  { label: 'Cookies', metric: '24.5k', last: true },
]


const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Project Example</title>
      </Head>
      <Search placeholder="start here" />
      <Stats stats={stats} />
      <Pager />
      <main className="container mx-auto">
      </main>
      <Footer />
    </>
  );
};

export default Home;
