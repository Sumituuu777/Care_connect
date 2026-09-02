import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import QuickActions from "./components/QuickActions";
import SupportForm from "./components/SupportForm";
import VolunteerForm from "./components/VolunteerForm";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero/>
        <QuickActions/>
        <HowItWorks/>
        <SupportForm/>
        <VolunteerForm/>
      </main>
    </div>
  );
}

export default App;
