import {
  HeartPulse,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-12 text-slate-300">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-emerald-600 p-2 text-white">
                <HeartPulse size={22} />
              </div>

              <span className="text-xl font-bold text-white">
                CareConnect
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Connecting communities with healthcare support,
              volunteers, and useful resources.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <a
                href="#home"
                className="block transition hover:text-emerald-400"
              >
                Home
              </a>

              <a
                href="#support"
                className="block transition hover:text-emerald-400"
              >
                Get Support
              </a>

              <a
                href="#volunteer"
                className="block transition hover:text-emerald-400"
              >
                Become a Volunteer
              </a>

              <a
                href="#how-it-works"
                className="block transition hover:text-emerald-400"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <Mail size={17} />
                <span>support@careconnect.org</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={17} />
                <span>Community Healthcare Network</span>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          © 2026 CareConnect. Built for community healthcare support.
        </div>

      </div>
    </footer>
  );
}

export default Footer;