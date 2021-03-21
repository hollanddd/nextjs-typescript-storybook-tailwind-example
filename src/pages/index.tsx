import { AppStore } from '../components/AppStore';
import { Content } from '../components/Content';
import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';
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
// Question fake
const questions = [
    { question: 'Who is the fairest of them all?', answer: 'Cinderella' },
    { question: 'Who can fix it?', answer: 'Felix' },
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
	<Content />
        <AppStore />
        <Stats stats={stats} />
	<Faq questions={questions} />
        <JumpOut />
      </main>
      <Footer />
    </>
  );
};

export default Home;
