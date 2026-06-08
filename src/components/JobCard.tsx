import React from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Briefcase,
  Clock,
  Bookmark,
  IndianRupee
} from 'lucide-react'

import type { Job } from '../lib/jobs'

export default function JobCard({ job }: { job: Job }) {
  return (
    <Link
      to={`/jobs/${job.id}`}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
    >
      {/* Top Section */}
      <div className="flex items-start justify-between">

        <div className="flex gap-4">
          {/* Company Logo */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-700">
            {job.company.charAt(0)}
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600">
              {job.title}
            </h3>

            <p className="mt-1 text-sm font-medium text-slate-600">
              {job.company}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {job.locationLabel}
              </span>

              <span className="flex items-center gap-1">
                <Briefcase size={14} />
                {job.jobType}
              </span>
            </div>
          </div>
        </div>

        {/* Bookmark */}
        <button
          onClick={(e) => e.preventDefault()}
          className="rounded-full p-2 transition hover:bg-slate-100"
        >
          <Bookmark size={18} />
        </button>
      </div>

      {/* Salary & Experience */}
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          {job.experience}
        </span>

        <span className="flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          <IndianRupee size={12} />
          ₹4-12 LPA
        </span>

        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
          Hybrid
        </span>
      </div>

      {/* Skills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

        <div className="flex items-center gap-1 text-xs text-slate-500">
          <Clock size={14} />
          Posted {job.postedDaysAgo} days ago
        </div>

        <Link
  to={`/apply/${job.id}`}
  onClick={(e) => e.stopPropagation()}
  className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
>
  Apply Now
</Link>
      </div>
    </Link>
  )
}