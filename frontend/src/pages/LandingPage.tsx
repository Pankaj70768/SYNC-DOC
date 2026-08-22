import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fc] text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white">
            S
          </div>

          <div>
            <h1 className="text-xl font-bold">SyncDoc</h1>
            <p className="text-xs text-slate-500">
              Write. Collaborate. Sync.
            </p>
          </div>
        </Link>

        <div className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <span>Workspace</span>
          <span>Collaboration</span>
          <span>Documents</span>
        </div>

        <Link
          to="/login"
          className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Get Started
        </Link>
      </nav>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 pb-16 pt-10 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Real-time collaboration
            </div>

            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl">
              Your ideas.
              <br />
              <span className="text-slate-400">Perfectly in sync.</span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Create documents, collaborate with your team in real time, and
              watch every idea come together seamlessly in one intelligent
              workspace.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/register"
                className="rounded-2xl bg-slate-950 px-7 py-4 text-center text-sm font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-slate-800"
              >
                Start Writing →
              </Link>

              <Link
                to="/login"
                className="rounded-2xl border border-slate-200 bg-white px-7 py-4 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore Workspace
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-500">
              <span>⚡ Instant synchronization</span>
              <span>👥 Live collaboration</span>
              <span>🔒 Secure documents</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-200/50 via-violet-100/50 to-cyan-100/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-500">
                  Synced just now
                </span>
              </div>

              <div className="p-7 sm:p-10">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Team Workspace
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      SyncDoc Project Plan
                    </h3>
                  </div>

                  <div className="flex -space-x-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-xs font-bold text-white">
                      C
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-violet-500 text-xs font-bold text-white">
                      A
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-xs font-bold text-white">
                      P
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="h-3 w-full rounded-full bg-slate-100" />
                  <div className="h-3 w-11/12 rounded-full bg-slate-100" />
                  <div className="h-3 w-8/12 rounded-full bg-slate-100" />

                  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                    <p className="text-sm font-semibold">
                      ✨ Collaboration is live
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      3 teammates are editing this document.
                    </p>
                  </div>

                  <div className="h-3 w-full rounded-full bg-slate-100" />
                  <div className="h-3 w-10/12 rounded-full bg-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LandingPage