import Header from './components/Header';
import People from './components/People';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="h-full">
      <Header />
      <People />
      <Footer />
    </main>
  );
}
