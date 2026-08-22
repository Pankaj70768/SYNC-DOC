import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import {
  ArrowLeft,
  Bell,
  Bold,
  ChevronDown,
  Clock3,
  Code2,
  Copy,
  Download,
  FileText,
  Italic,
  Link2,
  List,
  ListOrdered,
  MessageSquare,
  MoreHorizontal,
  Redo2,
  Share2,
  Sparkles,
  Strikethrough,
  Underline,
  Undo2,
  Users,
  X,
} from 'lucide-react'

function EditorPage() {
    const [isShareOpen, setIsShareOpen] = useState(false)
    const [inviteEmail, setInviteEmail] = useState('')
const [permission, setPermission] = useState('Editor')
const [collaborators, setCollaborators] = useState([
  { name: 'Chakri', email: 'chakri@syncdoc.com', role: 'Owner', initial: 'C' },
  { name: 'Aditi', email: 'aditi@syncdoc.com', role: 'Editor', initial: 'A' },
  { name: 'Pankaj', email: 'pankaj@syncdoc.com', role: 'Editor', initial: 'P' },
])
  const handleInvite = () => {
    if (!inviteEmail.trim()) return

    const name = inviteEmail.split('@')[0]

    const newCollaborator = {
      name,
      email: inviteEmail,
      role: permission,
      initial: name.charAt(0).toUpperCase(),
    }

    setCollaborators([...collaborators, newCollaborator])
    setInviteEmail('')
    setPermission('Editor')
  }
  const { documentId } = useParams()

  const documentTitles: Record<string, string> = {
    'project-plan': 'SyncDoc Project Plan',
    'design-system': 'Design System',
    'meeting-notes': 'Team Meeting Notes',
  }

  const title =
    documentTitles[documentId || ''] || 'Untitled Document'

  return (
    <main className="min-h-screen bg-[#f7f8fc] text-slate-900">
      {/* Top header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="hidden h-7 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                S
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-bold">SyncDoc</p>
                <p className="text-[11px] text-slate-400">
                  Collaborative workspace
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <div className="flex -space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-[10px] font-bold text-white">
                  C
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-violet-500 text-[10px] font-bold text-white">
                  A
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-[10px] font-bold text-white">
                  P
                </div>
              </div>

              <button className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
                <Users size={18} />
              </button>
            </div>

            <button className="hidden rounded-xl p-2.5 text-slate-500 hover:bg-slate-100 sm:block">
              <Bell size={19} />
            </button>

            <button
  onClick={() => setIsShareOpen(true)}
  className="flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
>
              <Share2 size={17} />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Editor toolbar */}
      <div className="sticky top-16 z-20 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-1 overflow-x-auto px-4 py-3 lg:px-6">
          <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
            <Undo2 size={18} />
          </button>

          <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
            <Redo2 size={18} />
          </button>

          <div className="mx-2 h-6 w-px bg-slate-200" />

          <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
            Normal text
            <ChevronDown size={15} />
          </button>

          <div className="mx-2 h-6 w-px bg-slate-200" />

          <button className="rounded-lg p-2 hover:bg-slate-100">
            <Bold size={18} />
          </button>

          <button className="rounded-lg p-2 hover:bg-slate-100">
            <Italic size={18} />
          </button>

          <button className="rounded-lg p-2 hover:bg-slate-100">
            <Underline size={18} />
          </button>

          <button className="rounded-lg p-2 hover:bg-slate-100">
            <Strikethrough size={18} />
          </button>

          <div className="mx-2 h-6 w-px bg-slate-200" />

          <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100">
            <List size={18} />
          </button>

          <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100">
            <ListOrdered size={18} />
          </button>

          <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100">
            <Link2 size={18} />
          </button>

          <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100">
            <Code2 size={18} />
          </button>

          <div className="mx-2 h-6 w-px bg-slate-200" />

          <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Main editor area */}
      <div className="mx-auto flex max-w-[1600px]">
        <section className="min-h-[calc(100vh-113px)] flex-1 px-4 py-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200/80 bg-white px-6 py-10 shadow-sm sm:px-12 lg:px-16">
            {/* Document status */}
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <FileText size={21} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                    Document
                  </p>
                  <p className="text-sm font-semibold text-slate-700">
                    Personal workspace
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                All changes saved
              </div>
            </div>

            {/* Title */}
            <input
              defaultValue={title}
              className="w-full border-none bg-transparent text-3xl font-bold tracking-tight text-slate-950 outline-none placeholder:text-slate-300 sm:text-4xl"
              placeholder="Untitled Document"
            />

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock3 size={14} />
                Edited just now
              </span>

              <span>•</span>

              <span>3 collaborators</span>
            </div>

            <div className="my-10 h-px bg-slate-100" />

            {/* Editable content */}
            <div
              contentEditable
              suppressContentEditableWarning
              className="min-h-[550px] outline-none"
            >
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Building the future of collaboration
              </h1>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Welcome to SyncDoc — a workspace designed to make writing,
                thinking, and collaborating feel simple and natural.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                This document is shared with your team. Every change can be
                synchronized in real time, allowing everyone to stay on the
                same page.
              </p>

              <div className="my-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Sparkles size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Collaboration tip
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Share this document with your teammates and work together
                      without worrying about losing changes.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="mt-10 text-xl font-bold text-slate-900">
                Project goals
              </h2>

              <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-7 text-slate-600">
                <li>Create a fast and intuitive document workspace.</li>
                <li>Allow multiple users to collaborate in real time.</li>
                <li>Keep every document synchronized and secure.</li>
                <li>Make teamwork feel effortless.</li>
              </ul>

              <h2 className="mt-10 text-xl font-bold text-slate-900">
                Next steps
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Add your ideas here. This editor is ready for your content and
                will become the core collaborative experience of SyncDoc.
              </p>
            </div>
          </div>
        </section>

        {/* Right collaboration panel */}
        <aside className="hidden w-80 border-l border-slate-200 bg-white p-6 xl:block">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">Collaboration</h3>

            <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100">
              <MoreHorizontal size={18} />
            </button>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                C
              </div>

              <div>
                <p className="text-sm font-semibold">Chakri</p>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Editing now
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 text-xs font-bold text-white">
                A
              </div>

              <div>
                <p className="text-sm font-semibold">Aditi</p>
                <p className="mt-1 text-xs text-slate-400">Viewing document</p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                P
              </div>

              <div>
                <p className="text-sm font-semibold">Pankaj</p>
                <p className="mt-1 text-xs text-slate-400">Recently active</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Comments</h3>
              <MessageSquare size={18} className="text-slate-400" />
            </div>

            <div className="mt-5 rounded-2xl border border-dashed border-slate-200 p-6 text-center">
              <MessageSquare
                size={24}
                className="mx-auto text-slate-300"
              />

              <p className="mt-3 text-sm font-medium text-slate-600">
                No comments yet
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Start a discussion with your collaborators.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              <Download size={17} />
              Export document
            </button>
          </div>
        </aside>
      </div>
      {isShareOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
    <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
      
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">
            Share document
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Invite people to collaborate on this document.
          </p>
        </div>

        <button
          onClick={() => setIsShareOpen(false)}
          className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <X size={20} />
        </button>
      </div>

      {/* Invite */}
      <div className="mt-8">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Invite people
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
  type="email"
  placeholder="Enter email address"
  value={inviteEmail}
  onChange={(event) => setInviteEmail(event.target.value)}
  className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-950 focus:bg-white"
/>

          <select
  value={permission}
  onChange={(event) => setPermission(event.target.value)}
  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none"
>
  <option>Editor</option>
  <option>Commenter</option>
  <option>Viewer</option>
</select>

          <button
  onClick={handleInvite}
  className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
>
  Send
</button>
        </div>
      </div>

      {/* Collaborators */}
<div className="mt-8 border-t border-slate-100 pt-6">
  <h3 className="text-sm font-semibold text-slate-900">
    People with access
  </h3>

  <div className="mt-5 space-y-4">
    {collaborators.map((collaborator) => (
      <div
        key={collaborator.email}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
            {collaborator.initial}
          </div>

          <div>
            <p className="text-sm font-semibold">
              {collaborator.name}
            </p>

            <p className="text-xs text-slate-400">
              {collaborator.email}
            </p>
          </div>
        </div>

        {collaborator.role === 'Owner' ? (
          <span className="text-xs font-medium text-slate-400">
            Owner
          </span>
        ) : (
          <select
  value={collaborator.role}
  onChange={(event) => {
    setCollaborators(
      collaborators.map((person) =>
        person.email === collaborator.email
          ? { ...person, role: event.target.value }
          : person
      )
    )
  }}
  className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-medium outline-none"
>
            <option>Editor</option>
            <option>Commenter</option>
            <option>Viewer</option>
          </select>
        )}
      </div>
    ))}
  </div>
</div>

      {/* Copy link */}
      <div className="mt-8 rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Share link
        </p>

        <div className="mt-3 flex items-center gap-3">
          <input
            readOnly
            value={`${window.location.origin}/editor/${documentId}`}
            className="min-w-0 flex-1 bg-transparent text-sm text-slate-600 outline-none"
          />

          <button
  onClick={() =>
    navigator.clipboard.writeText(
      `${window.location.origin}/editor/${documentId}`
    )
  }
  className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
>
            <Copy size={16} />
            Copy
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </main>
  )
}

export default EditorPage