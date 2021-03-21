import { AppStore } from '../components/AppStore';
import { Footer } from '../components/SocialFooter';
import { Hero } from '../components/Hero';
import { JumpOut } from '../components/JumpOut';
import { NavBar } from '../components/NavBar';
import { Stats } from '../components/Stats';

import Head from 'next/head';
import { FC } from 'react';

// Navbar Items
const items = [
  {label: 'Home'},
  {label: 'Products'},
  {label: 'Srevices'},
  {label: 'About'},
  {label: 'Media'},
]

// Stats fake
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
      <NavBar items={items} />
      <Hero />
      <main className="container mx-auto">
        <Stats stats={stats} />
        <AppStore />
        <JumpOut />
      </main>
      <Footer />
    </>
  );
};

export default Home;
