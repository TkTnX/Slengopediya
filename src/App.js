import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import Word from "./pages/word/Word";

import "./style/css/main.css";


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/word/:index" element={<Word />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
