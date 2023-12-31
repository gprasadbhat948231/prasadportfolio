import './App.css';
import Navbar from "./Pages/Navbar/Navbar";
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Exp from './Pages/Experience/Exp';
import ContactMe from './Pages/Contact/ContactMe';
import Github from './Pages/Skills/Github';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <AboutMe />
      <Github />
      <Exp />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;