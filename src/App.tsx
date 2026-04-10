import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEvent from './components/AboutEvent';
import AboutCollege from './components/AboutCollege';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Guests from './components/Guests';
import Organizers from './components/Organizers';
import Sponsors from './components/Sponsors';
import ApplyCTA from './components/ApplyCTA';
import Terms from './components/Terms';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <AboutCollege />
      <AboutEvent />
      <Timeline />
      <Prizes />
      <Guests />
      <Sponsors />
      <Organizers />
      <ApplyCTA />
      <Terms />
      <Footer />
    </div>
  );
}

export default App;
