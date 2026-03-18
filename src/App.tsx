import { Toaster } from 'sonner';
import { Navbar } from './pages/navbar/navbar';
import { Hero } from './pages/hero/hero';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Membership } from './pages/membership/membership';
import { Trainers } from './pages/trainers/trainers';
import { Contact } from './pages/contact/contact';
import { Footer } from './pages/footer/footer';


function App() {
  return (
      <div className="min-h-screen bg-background-light selection:bg-primary selection:text-slate-900">
      <Navbar />
         <main>
        <Hero />
        <About />
        <Services />
        <Membership />
        <Trainers />
        <Contact />
        <Footer />
      </main>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
