import { Navbar } from './pages/navbar/navbar';
import { Hero } from './pages/hero/hero';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Membership } from './pages/membership/membership';
import { Trainers } from './pages/trainers/trainers';


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
      </main>
    </div>
  );
}

export default App;
