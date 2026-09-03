import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Support from "./pages/Support.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import Dashboard from "./components/DashBoard.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/support" element={<Support />} />

          <Route path="/volunteer" element={<Volunteer />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;