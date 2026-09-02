import { useState } from "react";
import {
  CheckCircle,
  HeartHandshake,
  Clock3,
  Stethoscope,
} from "lucide-react";

function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="volunteer" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-emerald-600">
            JOIN OUR COMMUNITY
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Become a volunteer
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Your time and skills can help connect people with the
            healthcare resources they need.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left Information */}
          <div className="rounded-3xl bg-emerald-50 p-8 md:p-10">

            <div className="mb-8 inline-flex rounded-2xl bg-emerald-600 p-4 text-white">
              <HeartHandshake size={32} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Make a difference
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Volunteers help NGOs organize support requests,
              connect patients with resources, and provide
              valuable community assistance.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <div className="rounded-xl bg-white p-3 text-emerald-600 shadow-sm">
                  <Stethoscope size={21} />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Use your skills
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Contribute healthcare, technical, communication,
                    or organizational skills.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-white p-3 text-emerald-600 shadow-sm">
                  <Clock3 size={21} />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Flexible availability
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Choose the days and time periods when you
                    are available to help.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-white p-3 text-emerald-600 shadow-sm">
                  <CheckCircle size={21} />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Community impact
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Help make healthcare support more accessible
                    within your community.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >

            <div className="grid gap-6 md:grid-cols-2">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Phone Number
                </label>

                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  City / Area
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your city"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              {/* Role */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Preferred Role
                </label>

                <select
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="">Select a role</option>
                  <option>Healthcare Support</option>
                  <option>Patient Assistance</option>
                  <option>Community Outreach</option>
                  <option>Fundraising</option>
                  <option>Technical Support</option>
                  <option>General Volunteer</option>
                </select>
              </div>

              {/* Availability */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Availability
                </label>

                <select
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="">Select availability</option>
                  <option>Weekdays</option>
                  <option>Weekends</option>
                  <option>Morning</option>
                  <option>Evening</option>
                  <option>Flexible</option>
                </select>
              </div>

            </div>

            {/* Skills */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                Skills / Experience
              </label>

              <input
                type="text"
                placeholder="e.g. First aid, communication, teaching, coding..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            {/* Motivation */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                Why would you like to volunteer?
              </label>

              <textarea
                rows="4"
                placeholder="Tell us briefly about your motivation..."
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-emerald-600 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
            >
              Register as a Volunteer
            </button>

            {/* Success */}
            {submitted && (
              <div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-700">
                <CheckCircle size={18} />
                Thank you! Your volunteer registration has been received.
              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}

export default VolunteerForm;