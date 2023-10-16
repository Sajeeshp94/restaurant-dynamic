import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// nnimport Restaurant from "./components/Restaurant";
import RestaurantDetails from "./components/RestaurantDetails";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>

  );
}

export default App;
