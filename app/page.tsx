import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Newsletter from '@/components/Newsletter';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <Navigation />
        <Hero />
        <Services />
      </div>
      <Newsletter />
      <div className='bg-text'>
        <Footer />
      </div>
    </main>
  );
}
