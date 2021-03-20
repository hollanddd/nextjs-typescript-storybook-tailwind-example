import Head from 'next/head';
import { FC } from 'react';
import { Button } from '../components/Button';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Project example</title>
      </Head>
      <main className="container mx-auto">
        <h1>Main</h1>
        <Button label="Click here" color="bg-green-400" />
      </main>
    </>
  );
};

export default Home;
