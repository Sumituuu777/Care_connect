import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Support from "./pages/Support";
import Volunteer from "./pages/Volunteer";
import Dashboard from "./components/Dashboard";

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