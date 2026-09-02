import { HeartPulse } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-emerald-600 p-2 text-white">
            <HeartPulse size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              CareConnect
            </h1>
            <p className="text-xs text-slate-500">
              Healthcare Support Network
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm font-medium hover:text-emerald-600">
            Home
          </a>

          <a href="#support" className="text-sm font-medium hover:text-emerald-600">
            Get Support
          </a>

          <a href="#volunteer" className="text-sm font-medium hover:text-emerald-600">
            Volunteer
          </a>

          <a href="#how-it-works" className="text-sm font-medium hover:text-emerald-600">
            How It Works
          </a>
        </div>

        <a
          href="#support"
          className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Get Help
        </a>

      </div>
    </nav>
  );
}

export default Navbar;