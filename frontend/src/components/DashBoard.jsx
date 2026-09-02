import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  HeartPulse,
  Users,
  ArrowUpRight,
  MoreVertical,
} from "lucide-react";

function Dashboard() {
  const requests = [
    {
      id: 1,
      name: "Raj Kumar",
      category: "Medical Assistance",
      priority: "High",
      status: "Pending",
      time: "10 min ago",
      summary:
        "Patient is seeking assistance with accessing healthcare services due to financial difficulties.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      category: "Medicine Support",
      priority: "Medium",
      status: "In Progress",
      time: "35 min ago",
      summary:
        "Patient needs help finding affordable medication and information about nearby support resources.",
    },
    {
      id: 3,
      name: "Amit Verma",
      category: "General Assistance",
      priority: "Low",
      status: "Resolved",
      time: "1 hour ago",
      summary:
        "Patient requested information about available community healthcare programs.",
    },
    {
      id: 4,
      name: "Neha Singh",
      category: "Hospital Information",
      priority: "High",
      status: "Pending",
      time: "2 hours ago",
      summary:
        "Patient is looking for information about nearby hospitals and available financial assistance.",
    },
  ];

  const getPriorityStyle = (priority) => {
    if (priority === "High") {
      return "bg-red-50 text-red-600";
    }

    if (priority === "Medium") {
      return "bg-amber-50 text-amber-600";
    }

    return "bg-emerald-50 text-emerald-600";
  };

  const getStatusStyle = (status) => {
    if (status === "Resolved") {
      return "bg-emerald-50 text-emerald-600";
    }

    if (status === "In Progress") {
      return "bg-blue-50 text-blue-600";
    }

    return "bg-amber-50 text-amber-600";
  };

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium text-emerald-600">
              NGO ADMINISTRATION
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Support Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              Monitor healthcare requests and coordinate volunteer support.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
            <HeartPulse size={18} />
            New Request
          </button>
        </div>

        {/* Statistics */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Total Requests */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <Activity size={22} />
              </div>

              <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                <ArrowUpRight size={14} />
                12%
              </span>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Total Requests
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              24
            </h2>
          </div>

          {/* Urgent */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-red-50 p-3 text-red-600">
                <AlertTriangle size={22} />
              </div>

              <span className="text-xs font-medium text-slate-400">
                Needs attention
              </span>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Urgent Requests
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              5
            </h2>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                <Clock size={22} />
              </div>

              <span className="text-xs font-medium text-slate-400">
                Awaiting action
              </span>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Pending Requests
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              8
            </h2>
          </div>

          {/* Volunteers */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Users size={22} />
              </div>

              <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                <ArrowUpRight size={14} />
                8%
              </span>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Active Volunteers
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              38
            </h2>
          </div>

        </div>

        {/* Main Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* Requests */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="flex items-center justify-between border-b border-slate-200 p-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Recent Support Requests
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  AI-classified patient support requests
                </p>
              </div>

              <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                View all
              </button>
            </div>

            <div className="divide-y divide-slate-100">

              {requests.map((request) => (
                <div
                  key={request.id}
                  className="p-6 transition hover:bg-slate-50"
                >

                  {/* Request Header */}
                  <div className="flex items-start justify-between gap-4">

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                        {request.name.charAt(0)}
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {request.name}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {request.category} • {request.time}
                        </p>
                      </div>

                    </div>

                    <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                      <MoreVertical size={18} />
                    </button>

                  </div>

                  {/* AI Summary */}
                  <div className="mt-5 rounded-xl bg-slate-50 p-4">

                    <div className="mb-2 flex items-center gap-2">
                      <Activity
                        size={16}
                        className="text-emerald-600"
                      />

                      <span className="text-xs font-bold uppercase tracking-wide text-emerald-600">
                        AI Summary
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-slate-600">
                      {request.summary}
                    </p>

                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getPriorityStyle(
                        request.priority
                      )}`}
                    >
                      {request.priority} Priority
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                        request.status
                      )}`}
                    >
                      {request.status}
                    </span>

                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">

            {/* Volunteer Overview */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">
                <h2 className="font-bold text-slate-900">
                  Volunteer Overview
                </h2>

                <Users
                  size={20}
                  className="text-emerald-600"
                />
              </div>

              <div className="mt-6 space-y-5">

                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      Healthcare Support
                    </span>

                    <span className="font-semibold">
                      14
                    </span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[70%] rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      Patient Assistance
                    </span>

                    <span className="font-semibold">
                      10
                    </span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[55%] rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      Community Outreach
                    </span>

                    <span className="font-semibold">
                      8
                    </span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[45%] rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      Technical Support
                    </span>

                    <span className="font-semibold">
                      6
                    </span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[35%] rounded-full bg-emerald-500" />
                  </div>
                </div>

              </div>

              <button className="mt-6 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Manage Volunteers
              </button>

            </div>

            {/* AI Feature Card */}
            <div className="rounded-2xl bg-emerald-600 p-6 text-white shadow-sm">

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/15 p-3">
                  <Activity size={22} />
                </div>

                <div>
                  <h3 className="font-bold">
                    AI Assistance
                  </h3>

                  <p className="text-xs text-emerald-100">
                    Automated request analysis
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-emerald-50">
                AI automatically categorizes support requests,
                identifies priority levels, and creates summaries
                for NGO volunteers.
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-medium">
                <CheckCircle size={17} />
                AI system operational
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Dashboard;