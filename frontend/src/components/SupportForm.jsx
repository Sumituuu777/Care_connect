import { useState } from "react";
import { useSupport } from "../context/SupportContext";

function SupportForm() {
  const [submitted, setSubmitted] = useState(false);
  const { submitSupportRequest, loading, error } = useSupport();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      name: form.name.value,
      age: Number(form.age.value),
      contact: form.contact.value,
      category: form.category.value,
      description: form.description.value,
    };

    const result = await submitSupportRequest(formData);

    if (result.success) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section id="support" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-3xl">

        <div className="mb-10 text-center">
          <p className="font-semibold text-emerald-600">
            GET SUPPORT
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Tell us how we can help
          </h2>

          <p className="mt-3 text-slate-600">
            Your information helps our volunteers understand
            your support needs.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Age
              </label>

              <input
                type="number"
                name="age"
                required
                placeholder="Enter age"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Phone / Email
              </label>

              <input
                type="text"
                name="contact"
                required
                placeholder="How can we contact you?"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Support Category
              </label>

              <select
                name="category"
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-500"
              >
                <option value="">Select category</option>
                <option>Medical Assistance</option>
                <option>Medicine Support</option>
                <option>Hospital Information</option>
                <option>Financial Support</option>
                <option>General Assistance</option>
              </select>
            </div>

          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold">
              Describe your request
            </label>

            <textarea
              name="description"
              required
              rows="5"
              placeholder="Briefly explain what support you need..."
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-emerald-600 py-3.5 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Submitting..."
              : "Submit Support Request"}
          </button>

          {error && (
            <div className="mt-4 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          {submitted && (
            <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-center text-sm font-medium text-emerald-700">
              ✓ Your request has been submitted successfully.
            </div>
          )}

        </form>

      </div>
    </section>
  );
}

export default SupportForm;