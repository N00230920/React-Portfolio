import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from "./pages/PageNotFound";

//Import components
import NavBar from './components/NavBar';
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <NavBar />
      <h1>Hello from App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
      
  );
}

export default App;