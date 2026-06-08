import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Search,
  Bell,
  Briefcase,
  Building2,
  UserCircle
} from 'lucide-react'

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-8">

          <Link
            to="/jobs"
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold">
              J
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                JobHub
              </h1>

              <p className="text-[10px] text-slate-500">
                Find Your Dream Career
              </p>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden lg:flex relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search jobs, skills, companies..."
              className="w-80 rounded-xl border border-slate-300 bg-slate-50 py-2 pl-10 pr-4 text-sm focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
          </div>

        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2">

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'text-slate-600 hover:bg-slate-100'
              }`
            }
          >
            <Briefcase size={16} />
            Jobs
          </NavLink>
{/* 
          <NavLink
            to="/companies"
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
          >
            <Building2 size={16} />
            Companies
          </NavLink> */}

          {/* <NavLink
            to="/remote-jobs"
            className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
          >
            Remote Jobs
          </NavLink> */}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Post Job */}
          {/* <button className="hidden sm:block rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
            Post Job
          </button> */}

          {/* Notifications */}
          {/* <button className="relative rounded-xl p-2 hover:bg-slate-100">
            <Bell size={20} />

            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </button> */}

          {/* User */}
          {/* <button className="rounded-full hover:bg-slate-100">
            <UserCircle
              size={36}
              className="text-slate-600"
            />
          </button> */}
        </div>

      </div>
    </header>
  )
}