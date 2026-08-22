import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  Bell,
  ChevronRight,
  Clock3,
  FileText,
  Folder,
  Grid2X2,
  Plus,
  Search,
  Settings,
  Share2,
  Sparkles,
  Star,
  Users,
  Trash2,
} from 'lucide-react'

function DashboardPage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const [documents, setDocuments] = useState([
    {
      id: 'project-plan',
      title: 'SyncDoc Project Plan',
      description: 'Planning the next generation of collaborative documents.',
      updated: 'Edited 5 minutes ago',
      members: ['C', 'A', 'P'],
      icon: '📋',
    },
    {
      id: 'design-system',
      title: 'Design System',
      description: 'Colors, typography, components and product direction.',
      updated: 'Edited 2 hours ago',
      members: ['C', 'A'],
      icon: '🎨',
    },
    {
      id: 'meeting-notes',
      title: 'Team Meeting Notes',
      description: 'Weekly discussion, decisions and next action items.',
      updated: 'Edited yesterday',
      members: ['C', 'P'],
      icon: '📝',
    },
  ])

  const deleteDocument = (id: string) => {
    setDocuments((currentDocuments) =>
      currentDocuments.filter((document) => document.id !== id)
    )
  }

  const createNewDocument = () => {
    navigate('/editor/new-document')
  }
  return (
    <main className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-72 flex-col border-r border-slate-200/70 bg-white p-5 lg:flex">
          <Link to="/" className="flex items-center gap-3 px-2 py-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white shadow-lg shadow-slate-900/15">
              S
            </div>

            <div>
              <h1 className="font-bold tracking-tight">SyncDoc</h1>
              <p className="text-xs text-slate-500">Your workspace</p>
            </div>
          </Link>

          <button
  onClick={createNewDocument}
  className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800"
>
            <Plus size={18} />
            New document
          </button>

          <nav className="mt-8 space-y-2">
            <button className="flex w-full items-center gap-3 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-950">
              <Grid2X2 size={18} />
              Overview
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-950">
              <FileText size={18} />
              My documents
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-950">
              <Users size={18} />
              Shared with me
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-950">
              <Star size={18} />
              Favorites
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-950">
              <Folder size={18} />
              Folders
            </button>
          </nav>

          <div className="mt-auto">
            <div className="rounded-2xl bg-slate-950 p-5 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Sparkles size={20} />
              </div>

              <h3 className="mt-4 text-sm font-semibold">
                Work better together
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                Create, share and collaborate with your team in real time.
              </p>
            </div>

            <button className="mt-5 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50">
              <Settings size={18} />
              Settings
            </button>
          </div>
        </aside>

        {/* Main content */}
        <section className="flex min-w-0 flex-1 flex-col">
          {/* Topbar */}
          <header className="flex items-center justify-between border-b border-slate-200/70 bg-white px-6 py-5 lg:px-10">
            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 font-bold text-white">
                S
              </div>
              <span className="font-bold">SyncDoc</span>
            </div>

            <div className="w-full max-w-xl">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
  type="text"
  placeholder="Search documents..."
  value={searchQuery}
  onChange={(event) => setSearchQuery(event.target.value)}
  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
/>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950">
                <Bell size={20} />
              </button>

              <div className="h-9 w-px bg-slate-200" />

              <button className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white">
                  C
                </div>

                <div className="hidden text-left sm:block">
                  <p className="text-sm font-semibold">Chakri</p>
                  <p className="text-xs text-slate-500">Frontend</p>
                </div>
              </button>
            </div>
          </header>

          {/* Dashboard */}
          <div className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
            <div className="mx-auto max-w-7xl">
              {/* Welcome */}
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Thursday, August 20
                  </p>

                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    Good morning, Chakri 👋
                  </h2>

                  <p className="mt-3 text-slate-500">
                    Everything you need for a productive day is right here.
                  </p>
                </div>

                <button
  onClick={createNewDocument}
  className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
>
  <Plus size={18} />
  Create document
</button>
              </div>

              {/* Stats */}
              <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <FileText size={20} />
                    </div>
                    <span className="text-xs font-medium text-emerald-600">
                      +12%
                    </span>
                  </div>
                  <p className="mt-5 text-2xl font-bold">12</p>
                  <p className="mt-1 text-sm text-slate-500">My documents</p>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                      <Users size={20} />
                    </div>
                    <span className="text-xs font-medium text-emerald-600">
                      +3
                    </span>
                  </div>
                  <p className="mt-5 text-2xl font-bold">8</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Shared documents
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                      <Clock3 size={20} />
                    </div>
                  </div>
                  <p className="mt-5 text-2xl font-bold">24h</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Time collaborating
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                      <Share2 size={20} />
                    </div>
                  </div>
                  <p className="mt-5 text-2xl font-bold">5</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Active collaborators
                  </p>
                </div>
              </div>

              {/* Recent documents */}
              <div className="mt-12">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">
                      Recent documents
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Continue where you left off.
                    </p>
                  </div>

                  <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-slate-950">
                    View all
                    <ChevronRight size={17} />
                  </button>
                </div>

                <div className="mt-6 grid gap-5 lg:grid-cols-3">
                  {documents
  .filter((document) =>
    document.title.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .map((document) => (
                    <Link
                      key={document.id}
                      to={`/editor/${document.id}`}
                      className="group rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl">
                          {document.icon}
                        </div>

                        <button
  onClick={(event) => {
    event.preventDefault()
    event.stopPropagation()
    deleteDocument(document.id)
  }}
  className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
  title="Delete document"
>
  <Trash2 size={19} />
</button>
                      </div>

                      <h4 className="mt-6 text-lg font-bold tracking-tight">
                        {document.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {document.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                        <p className="text-xs text-slate-400">
                          {document.updated}
                        </p>

                        <div className="flex -space-x-2">
                          {document.members.map((member, index) => (
                            <div
                              key={`${member}-${index}`}
                              className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-slate-800 text-[10px] font-bold text-white"
                            >
                              {member}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom section */}
              <div className="mt-12 grid gap-6 xl:grid-cols-2">
                <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold">Continue collaborating</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Your teammates are currently active.
                      </p>
                    </div>

                    <Users size={22} className="text-slate-400" />
                  </div>

                  <div className="mt-6 flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                    <div className="flex -space-x-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-xs font-bold text-white">
                        A
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-violet-500 text-xs font-bold text-white">
                        P
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        2 teammates online
                      </p>
                      <p className="text-xs text-slate-500">
                        Editing documents right now
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-lg shadow-slate-900/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Sparkles size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    Ready to create something?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Start a new document and invite your team to collaborate in
                    real time.
                  </p>

                  <button
  onClick={createNewDocument}
  className="mt-6 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
>
                    Start writing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default DashboardPage