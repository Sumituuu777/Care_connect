import { FileText, Search, HandHeart } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Submit a request",
      description:
        "Share the type of healthcare support you are looking for."
    },
    {
      icon: Search,
      number: "02",
      title: "Smart classification",
      description:
        "Our system organizes the request by category and priority."
    },
    {
      icon: HandHeart,
      number: "03",
      title: "Get connected",
      description:
        "An NGO volunteer reviews the request and helps with next steps."
    }
  ];

  return (
    <section id="how-it-works" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">

          <h2 className="mt-2 text-3xl font-bold">
            How CareConnect works
          </h2>

          <p className="mt-4 text-emerald-600">
            A simple process designed to help NGOs organize
            and respond to community requests more effectively.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 p-7"
              >
                <span className="text-sm font-bold text-emerald-600">
                  {step.number}
                </span>

                <div className="mt-5 w-fit rounded-xl bg-slate-100 p-3">
                  <Icon size={25} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;