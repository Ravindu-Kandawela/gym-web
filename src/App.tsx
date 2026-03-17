import { Navbar } from './pages/navbar/navbar';
import { Hero } from './pages/hero/hero';


function App() {
  return (
      <div className="min-h-screen bg-background-light selection:bg-primary selection:text-slate-900">
      <Navbar />
         <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
