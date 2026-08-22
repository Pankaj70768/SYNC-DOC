import { Link } from 'react-router-dom'
import { ArrowLeft, Eye, Mail } from 'lucide-react'

function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] p-4 sm:p-6">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-slate-200/50 lg:grid-cols-2">
        
        {/* Left side */}
        <section className="relative hidden overflow-hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

          <Link
            to="/"
            className="relative z-10 flex items-center gap-3"
          >
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
              Collaboration without limits
            </div>

            <h2 className="max-w-md text-5xl font-bold leading-tight">
              Everything your team writes.
              <span className="text-slate-400"> Together.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
              Create, collaborate, and keep every important idea perfectly
              synchronized in one beautiful workspace.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-blue-500 text-xs font-bold">
                  C
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-violet-500 text-xs font-bold">
                  A
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-emerald-500 text-xs font-bold">
                  P
                </div>
              </div>

              <p className="text-sm text-slate-400">
                Your workspace is ready.
              </p>
            </div>
          </div>

          <p className="relative z-10 text-sm text-slate-500">
            © 2026 SyncDoc. Built for better collaboration.
          </p>
        </section>

        {/* Right side */}
        <section className="flex items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-md">
            <Link
              to="/"
              className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-950"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Welcome back
              </h2>

              <p className="mt-2 text-slate-500">
                Sign in to continue to your SyncDoc workspace.
              </p>
            </div>

            <form className="space-y-5">
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
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-slate-600 hover:text-slate-950"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <Eye
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white"
                  />
                </div>
              </div>

              <Link
                to="/dashboard"
                className="block w-full rounded-xl bg-slate-950 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Sign in to SyncDoc
              </Link>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400">OR CONTINUE WITH</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              <span className="text-lg font-bold">G</span>
              Continue with GitHub
            </button>

            <p className="mt-8 text-center text-sm text-slate-500">
              New to SyncDoc?{' '}
              <Link
                to="/register"
                className="font-semibold text-slate-950 hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default LoginPage