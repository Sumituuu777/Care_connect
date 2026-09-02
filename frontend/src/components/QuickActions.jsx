import { HeartHandshake, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <section className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <p className="font-semibold text-emerald-600">
            HOW CAN WE HELP?
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Choose what you need
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <Link
            to="/support"
            className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 w-fit rounded-xl bg-emerald-100 p-3 text-emerald-600">
              <HeartHandshake size={28} />
            </div>

            <h3 className="text-xl font-bold">
              I need healthcare support
            </h3>

            <p className="mt-2 text-slate-600">
              Tell us what kind of assistance you need and our
              support team will review your request.
            </p>

            <span className="mt-5 inline-block font-semibold text-emerald-600">
              Request support →
            </span>
          </Link>

          <Link
            to="/volunteer"
            className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 w-fit rounded-xl bg-blue-100 p-3 text-blue-600">
              <UserRound size={28} />
            </div>

            <h3 className="text-xl font-bold">
              I want to volunteer
            </h3>

            <p className="mt-2 text-slate-600">
              Join our community and help connect patients with
              useful healthcare resources.
            </p>

            <span className="mt-5 inline-block font-semibold text-blue-600">
              Become a volunteer →
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default QuickActions;