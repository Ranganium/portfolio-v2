import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import AboutMePage from "./pages/AboutMePage";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import CasePage from "./pages/CasePage";

function App() {
  return (
    <Router basename="/portfolio-v2">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutMePage />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/projects/:slug" element={<CasePage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
