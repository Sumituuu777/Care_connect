import { ArrowRight, HeartPulse, ShieldCheck, Users } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-20">

        <div>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Healthcare support,
            <span className="text-emerald-600">
              {" "}when you need it.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            CareConnect connects patients with NGO volunteers
            who can help them find the right support and resources.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#support"
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
            >
              Request Support
              <ArrowRight size={18} />
            </a>

            <a
              href="#volunteer"
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Users size={18} />
              Become a Volunteer
            </a>
          </div>

          <div className="mt-8 flex gap-8 text-sm text-slate-500">
            <div>
              <strong className="block text-xl text-slate-900">
                24/7
              </strong>
              Support requests
            </div>

            <div>
              <strong className="block text-xl text-slate-900">
                100+
              </strong>
              Community volunteers
            </div>

            <div>
              <strong className="block text-xl text-slate-900">
                Free
              </strong>
              NGO assistance
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-emerald-50 p-6 md:p-10">

            <div className="rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
                  <HeartPulse size={28} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Support Request
                  </p>
                  <p className="text-sm text-slate-500">
                    Your request has been received
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="h-3 w-3/4 rounded-full bg-slate-100" />
                <div className="h-3 w-full rounded-full bg-slate-100" />
                <div className="h-3 w-5/6 rounded-full bg-slate-100" />
              </div>

              <div className="mt-6 rounded-xl bg-emerald-50 p-4">
                <p className="text-sm font-medium text-emerald-700">
                  ✓ NGO volunteer will review your request
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;