import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, User, Lock } from 'lucide-react'

function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] p-4 sm:p-6">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-slate-200/50 lg:grid-cols-2">

        {/* Left */}
        <section className="relative hidden overflow-hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

          <Link to="/" className="relative z-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg font-bold text-slate-950">
              S
            </div>

            <div>
              <h1 className="text-xl font-bold">SyncDoc</h1>
              <p className="text-xs text-slate-400">
                Write. Collaborate. Sync.
              </p>
            </div>
          </Link>

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Start collaborating today
            </div>

            <h2 className="max-w-md text-5xl font-bold leading-tight">
              One workspace.
              <span className="text-slate-400"> Every idea.</span>
            </h2>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Create your SyncDoc account and bring your documents,
              teammates, and ideas together in one collaborative space.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  ⚡
                </span>
                Real-time document synchronization
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  👥
                </span>
                Collaborate with your team
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  🔒
                </span>
                Secure and organized workspace
              </div>
            </div>
          </div>

          <p className="relative z-10 text-sm text-slate-500">
            © 2026 SyncDoc. Built for better collaboration.
          </p>
        </section>

        {/* Right */}
        <section className="flex items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-md">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-950"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Create your account
              </h2>

              <p className="mt-2 text-slate-500">
                Start writing and collaborating with SyncDoc.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white"
                  />
                </div>
              </div>

              <Link
                to="/dashboard"
                className="block w-full rounded-xl bg-slate-950 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Create SyncDoc account
              </Link>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-slate-950 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default RegisterPage